"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Tags from "./components/tags";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      media: "",
      title: "",
      description: "",
      disabled: false,
      publishDate: format(new Date(), "yyyy-MM-dd"),
      categoryId: 1,
      tags: [],
      content: "",
      author: "",
    },
  });

  const HandleTags = (tags: string[]) => {
    setValue("tags", tags as never[], { shouldValidate: true });
  };

  const HandleChange = (e: any) => {
    setValue("content", e, { shouldValidate: true });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-14 gap-y-14">
      <h1 className="text-black text-4xl font-semibold">Crea una noticia</h1>

      <div className="grid grid-cols-2 items-center gap-5">
        <div className="max-w-lg">
          <h6>Inserte nombre de la noticia </h6>
          <Input className="border border-gray-400" {...register("title")} />
        </div>
        <div className="flex flex-row gap-x-5">
          <h5>Inserta una imagen</h5>
          <input type="file" />
        </div>
        <div className="max-w-lg">
          <h6>Inserte nombre del autor </h6>
          <Input className="border border-gray-400" {...register("author")} />
        </div>
      </div>
      <Tags tags={watch("tags")} setTags={HandleTags} home={true} />

      <h1 className="text-black text-4xl font-semibold">{watch("title")}</h1>

      <ReactQuill
        theme="snow"
        value={watch("content")}
        onChange={(e: any) => setValue("content", e)}
      />
    </div>
  );
};

export default Page;
