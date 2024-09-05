"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Tags from "./components/tags";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Article } from "@/types/news";
import useAxiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const [creada, setCreada] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm <Article>({
    defaultValues: {
      title: "",
      disabled: false,
      publishDate: format(new Date(), "yyyy-MM-dd"),
      categoryId: 1,
      tags: [],
      content: "",
    },
  });
  const axios = useAxiosInstance();
  const {toast} = useToast();
  const HandleTags = (tags: string[]) => {
    setValue("tags", tags as never[], { shouldValidate: true });
  };
  const onSubmit = (data: Article) => {
    try {
      const formData = new FormData();
      formData.append("media", data.media);
      delete data.media;
      formData.append("json", JSON.stringify(data));
      const response = axios.post("/v1/news/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setCreada(true);
      console.log(response);
      toast({
        title: "Noticia creada",
        description: "La noticia fue creada con exito",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar la noticia",
      })
      
    }
  }

  const HandleChange = (e: any) => {
    setValue("content", e, { shouldValidate: true });
  };
  if(creada){
    return  <div className="flex flex-col justify-center  animate-fadeIn items-center animation-FadeIn mt-14 w-4/6 mx-auto gap-10 rounded-2xl bg-gray-50 p-14" >
    <h1 className="text-4xl font-semibold">Gracias por contactarnos </h1>
    <Check size={100} className="text-primary"/>
  </div>
  }
  return (
    <div className="min-h-screen bg-white text-black flex flex-col p-14 gap-y-14">
      <h1 className="text-black text-4xl font-semibold">Crea una noticia</h1>

      <div className="grid grid-cols-2 items-center gap-5">
        <div className="max-w-lg">
          <h6>Inserte nombre de la noticia </h6>
          <Input className="border border-gray-400" {...register("title", {
            required: "Este campo es requerido",
          })} />
        </div>
        <div className="max-w-lg">
          <h6>Inserte nombre del autor de la noticia </h6>
          <Input className="border border-gray-400" {...register("author", {
            required: "Este campo es requerido",
          })} />
        </div>
        <div className="flex flex-row gap-x-5">
          <h5>Inserta una imagen</h5>
          <label
                htmlFor="file-upload"
                className="bg-dashboard   rounded-full w-full h-14 flex items-center px-4 text-white"
              >
                Inserta una imagen
              </label>
          {/* <input type="file" /> */}
          <input
                key={1}
                type="file"
                id="file-upload"
                accept="image/*"
                className="w-1/2"
                onChange={(e) => {
                  if (e?.target?.files) {
                    setValue("media", e.target.files[0]);
                  }
                }}
                placeholder="Seleccionar imagen"
              />
        </div>
       
      </div>
      <Tags tags={watch("tags")} setTags={HandleTags} home={true} />

      <h1 className="text-black text-4xl font-semibold">{watch("title")}</h1>

      <ReactQuill
        theme="snow"
        value={watch("content")}
        onChange={(e: any) => setValue("content", e)}
      />
      <Button onClick={handleSubmit(onSubmit)} className="lg:w-4/6">Crear</Button>
    </div>
  );
};

export default Page;
