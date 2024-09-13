"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tags from "../../crear/components/tags";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { getNewsById } from "../../../services/news";
import { Article } from "@/types/news";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import useAxiosInstance from "@/lib/axios";
const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  //   const [value, setValue] = useState("");
  const [news, setNews] = useState<Article>();
  const axios = useAxiosInstance();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Article>({
    defaultValues: {
      title: "",
      content: "",
      categoryId: 1,
      tags: [],
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewsById(params.id);
      console.log(response);
      setNews(response);
      setValue("title", response.title);
      setValue("content", response.content);
      setValue("id", response.id);
      setValue("tags", response.tags);
    };
    fetchData();
  }, []);
  const HandleChange = (e: any) => {
    setValue("content", e, { shouldValidate: true });
  };
  const onSubmit = async (data: Article) => {
    try {
      const response = await axios.post("/v1/news/update", data);
      console.log(response);
      if (response.data.error) {
        toast({
          title: "Error",
          description: response.data.message,
        });
      } else {
        toast({
          title: "Noticia actualizada",
          description: "La noticia ha sido actualizada correctamente",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Ocurrio un error al actualizar la noticia",
      });
    }
  };
  const HandleTags = (tags: string[]) => {
    setValue("tags", tags, { shouldValidate: true });
  };
  return (
    <form className="min-h-screen bg-white text-black flex flex-col p-14 gap-y-14">
      <h1 className="text-black text-4xl font-semibold">Editar una noticia</h1>

      <div className="grid grid-cols-2 items-center gap-5">
        <div className="max-w-lg">
          <h6>Inserte nombre de la noticia </h6>
          <Input className="border border-gray-400" {...register("title")} />
        </div>
        <div className="flex flex-row gap-x-5">
          <h5>Inserta una imagen</h5>
          <input type="file" />
        </div>
      </div>
      <Tags tags={watch("tags")} setTags={HandleTags} home={true} />

      <h1 className="text-black text-4xl font-semibold">{watch("title")}</h1>

      <ReactQuill
        theme="snow"
        value={watch("content")}
        onChange={HandleChange}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        type="button"
        className="max-w-lg"
      >
        Actualizar
      </Button>
    </form>
  );
};
export default Page;
