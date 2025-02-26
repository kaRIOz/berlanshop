"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { addProduct } from "../new/action";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState, useTransition, type ChangeEvent } from "react";
import { productFormSchema, type ProductFromType } from "./product-form.types";
import { Loading } from "@/components/loading";
import { updateProduct } from "../[id]/edit/actions";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import env from "@/configs/env";

type Props = {
    product?: {
        id: number;
        name: string;
        description: string;
        SKU: string;
        price: string;
        thumbnail: string;
        category: {
            id: number;
            nameFa: string;
        };
    } | null;
    categories?:
        | {
              id: number;
              nameFa: string;
              thumbnail: string;
              nameEn: string;
              parentId: number | null;
          }[]
        | null;
};

export function ProductForm({ product, categories }: Props) {
    const router = useRouter();
    const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<ProductFromType>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: product?.name ?? "",
            price: product?.price ?? "",
            description: product?.description ?? "",
            SKU: product?.SKU ?? "",
            thumbnail: product?.thumbnail ?? process.env.NEXT_DEFAULT_PRODUCT_IMAGE,
            categoryId: product?.category.id ?? 0,
        },
        mode: "onChange",
    });
    const [pending, startTransition] = useTransition();
    const [formState, action] = useActionState(
        !!product ? updateProduct.bind(null, product.id) : addProduct,
        undefined,
    );
    useEffect(() => {
        if (formState?.success) {
            toast({
                title: formState.message,
                variant: "default",
            });
            router.push("/admin/products");
        } else if (formState?.success === false) {
            toast({
                title: formState.message,
                variant: "destructive",
            });
        }
    }, [formState, router]);

    const onSubmit: SubmitHandler<ProductFromType> = data => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("SKU", data.SKU);
        formData.append("thumbnail", data.thumbnail ?? `${process.env.NEXT_DEFAULT_PRODUCT_IMAGE}`);
        formData.append("categoryId", `${data.categoryId}`);

        startTransition(async () => action(formData));
    };

    // function to handle file input changes
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result as string);
                setValue("thumbnail", file); // manually set the image in the form state
            };

            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const removeImage = () => {
        setPreview(null);
        hiddenFileInputRef.current!.value = "";
        setValue("thumbnail", null);
    };

    const triggerFileInput = () => hiddenFileInputRef.current?.click();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Controller
                    name="categoryId"
                    control={control}
                    render={({ field }) => (
                        <>
                            <Label htmlFor="categoryId">دسته بندی</Label>
                            <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="دسته بندی ها" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="0">بدون دسته بندی</SelectItem>
                                        {categories &&
                                            categories.map(category => (
                                                <SelectItem key={category.id} value={`${category.id}`}>
                                                    {category.nameFa}
                                                </SelectItem>
                                            ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </>
                    )}
                />
                {errors.categoryId && <span>{errors.categoryId.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-2">
                    <Label htmlFor="name">اسم محصول</Label>
                    <Input {...register("name")} name="name" type="text" />
                    {errors.name && <div className="text-destructive">{errors.name.message}</div>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="priceInCents">قیمت محصول</Label>
                    <Input {...register("price")} name="price" type="number" />
                    {errors.price && <div className="text-destructive">{errors.price.message}</div>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="SKU">کد شناسایی محصول</Label>
                    <Input {...register("SKU")} name="SKU" type="number" />
                    {errors.SKU && <div className="text-destructive">{errors.SKU.message}</div>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">توضیحات</Label>
                    <Textarea
                        {...register("description")}
                        id="description"
                        name="description"
                        required
                        defaultValue={product?.description}
                        className="w-full h-10 resize-none"
                    />
                    {errors.description && <div className="text-destructive">{errors.description.message}</div>}
                </div>
            </div>
            <div className="upload">
                {!preview && (
                    <button
                        type="button"
                        onClick={triggerFileInput}
                        className="bg-emerald-500 p-2 rounded-lg text-[12px] text-primary-content active:scale-95"
                    >
                        آپلود عکس محصول
                    </button>
                )}

                {preview && (
                    <div className="preview">
                        <div className="flex items-center gap-2">
                            <p>عکس جدید :</p>
                            <Image src={preview} className="img" alt="profilePicture" height={50} width={50} />
                        </div>

                        <div className="mt-2">
                            <button
                                type="button"
                                onClick={triggerFileInput}
                                className="bg-orange-400 text-primary-content text-[12px] p-2 rounded-lg"
                            >
                                عوض کردن عکس
                            </button>

                            <button
                                type="button"
                                onClick={removeImage}
                                className="bg-blue-400 text-primary-content text-[12px] p-2 rounded-lg"
                            >
                                حذف عکس
                            </button>
                        </div>
                    </div>
                )}
                {product && product.thumbnail !== process.env.NEXT_DEFAULT_PRODUCT_IMAGE ? (
                    // ? REFACTOR: <form action={deleteCurrentThumbnail}>
                    <div className="flex items-center gap-2 mt-2">
                        <p>عکس : </p>
                        <Image src={product.thumbnail} alt={`Product image-${product.name}`} height={50} width={50} />
                    </div>
                ) : // </form>
                null}
                <input
                    {...register("thumbnail")}
                    ref={hiddenFileInputRef}
                    hidden
                    type="file"
                    onChange={handleFileChange}
                />
                <p className="error">{errors.thumbnail && errors.thumbnail.message}</p>
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {pending ? <Loading /> : "ذخیره"}
            </Button>
        </form>
    );
}
