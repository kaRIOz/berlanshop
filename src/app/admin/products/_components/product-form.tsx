"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type ProductSchema } from "@/drizzle/schema/product/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { addProduct } from "../new/action";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState, useTransition, type ChangeEvent } from "react";
import { productFormSchema, type ProductFromType } from "./product-form.types";
import { Loading } from "@/components/loading";
import { updateProduct } from "../[id]/edit/actions";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SelectCategoryModel } from "@/drizzle/schema/product/category";

type Props = {
    categories: Pick<SelectCategoryModel, "id" | "nameFa" | "nameEn" | "thumbnail" | "parentId">[] | null;
    product?: ProductSchema;
};

export function ProductForm({ product, categories }: Props) {
    const router = useRouter();
    const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<ProductFromType>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: product?.name ?? "",
            price: product?.price ?? "",
            description: product?.description ?? "",
            SKU: product?.SKU ?? "",
            thumbnail: null,
            categoryId: product?.categoryId ?? 1,
        },
        mode: "onChange",
    });
    const [pending, startTransition] = useTransition();
    const [formState, action] = useActionState(
        product?.mode === "edit" ? updateProduct.bind(null, product.id) : addProduct,
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
        formData.append("thumbnail", data.thumbnail || "");
        formData.append("categoryId", data.categoryId.toString() ?? "0");

        console.log(Object.fromEntries(formData));

        if (!product) {
            startTransition(async () => action(formData));
        } else if (product.mode === "edit") {
            startTransition(async () => action(formData));
        }
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="دسته بندی محصول" />
                    </SelectTrigger>
                    <SelectContent {...register("categoryId")}>
                        <SelectGroup>
                            <SelectItem value="شال">شال</SelectItem>
                            <SelectItem value="روسری">روسری</SelectItem>
                            <SelectItem value="مقنعه">مقنعه</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
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
                    className="w-full h-16 resize-none"
                />
                {errors.description && <div className="text-destructive">{errors.description.message}</div>}
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
                        <Image src={preview} className="img" alt="profilePicture" height={50} width={50} />

                        <div className="buttons">
                            <button type="button" onClick={triggerFileInput}>
                                Change Image
                            </button>

                            <button type="button" onClick={removeImage}>
                                Remove Image
                            </button>
                        </div>
                    </div>
                )}
                {product && product.thumbnail && (
                    <Image src={product.thumbnail} alt={`Product image-${product.name}`} height={50} width={50} />
                )}
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
