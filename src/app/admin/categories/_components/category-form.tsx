"use client";

import React, { ChangeEvent, useActionState, useEffect, useRef, useState, useTransition } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { categoryFormSchema, type CategoryFormType } from "./category-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { addCategory } from "../new/action";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loading } from "@/components/loading";
import Image from "next/image";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { CategorySchema } from "@/drizzle/schema/product/category";
import { updateCategory } from "../[id]/edit/action";

type Props = {
    categories:
        | {
              id: number;
              nameFa: string;
              thumbnail: string | null;
              nameEn: string;
              parentId: number | null;
          }[]
        | null;

    category?: CategorySchema;
};

const CategoryForm: React.FC<Props> = ({ categories, category }: Props) => {
    const router = useRouter();
    const [formState, action] = useActionState(
        category?.mode == "edit" ? updateCategory.bind(null, category.id) : addCategory,
        undefined,
    );
    const [isPending, startTransition] = useTransition();
    const [preview, setPreview] = useState<string | null>(null);

    const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = useForm<CategoryFormType>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: category?.nameFa ?? "",
            path: category?.nameEn ?? "",
            thumbnail: null,
            parentId: category?.parentId ?? 0,
        },
    });
    const onSubmit: SubmitHandler<CategoryFormType> = data => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("path", data.path);
        formData.append("thumbnail", data.thumbnail ?? "");
        formData.append("parentId", `${data.parentId}`);
        startTransition(async () => action(formData));
    };

    useEffect(() => {
        if (formState?.success) {
            toast({
                title: formState.message,
                variant: "default",
            });
            router.push("/admin/categories");
        } else if (formState?.success === false) {
            toast({
                title: formState.message,
                variant: "destructive",
            });
        }
    }, [formState, router]);

    const triggerFileInput = () => hiddenFileInputRef.current?.click();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result as string);
                setValue("thumbnail", file);
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
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-2">
                    <Label htmlFor="name">اسم دسته بندی</Label>
                    <Input {...register("name")} name="name" type="text" />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="path"> مسیر</Label>
                    <Input {...register("path")} name="path" type="text" />
                    {errors.path && <span>{errors.path.message}</span>}
                </div>
                <div className="space-y-2">
                    <Controller
                        name="parentId"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Label htmlFor="parentId">دسته بندی والد</Label>
                                <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="دسته بندی ها" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="0">دسته بندی اصلی</SelectItem>
                                            {categories &&
                                                categories.map(cat => (
                                                    <SelectItem key={cat.id} value={`${cat.id}`}>
                                                        {cat.nameFa}
                                                    </SelectItem>
                                                ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </>
                        )}
                    />
                    {errors.parentId && <span>{errors.parentId.message}</span>}
                </div>
            </div>

            <div className="mb-4">
                {!preview && (
                    <button
                        type="button"
                        onClick={triggerFileInput}
                        className="bg-emerald-500 p-2 rounded-lg text-[12px] text-primary-content active:scale-95 block "
                    >
                        آپلود عکس دسته بندی
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

                {category && category.thumbnail && (
                    <div className="flex items-center gap-2 mt-2">
                        <p>عکس : </p>
                        <Image
                            src={category.thumbnail}
                            alt={`category image-${category.nameEn}`}
                            height={50}
                            width={50}
                        />
                    </div>
                )}
                <input
                    {...register("thumbnail")}
                    ref={hiddenFileInputRef}
                    hidden
                    type="file"
                    onChange={handleFileChange}
                />
                {errors.thumbnail && <p>{errors.thumbnail.message}</p>}
            </div>

            <Button disabled={isPending} type="submit">
                {isPending ? <Loading /> : "ذخیره"}
            </Button>
        </form>
    );
};

export default CategoryForm;
