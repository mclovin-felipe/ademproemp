'use client'
import { Input } from "@/components/ui/input";
import { Header } from "../component";
import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { SendContact } from "@/services/contact";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Check } from "lucide-react";
const Page = () => {
  const {
    register, handleSubmit, reset, watch, formState: { errors }
  }= useForm<IFormInput>();
  interface IFormInput {
    name: string;
    lastname: string;
    email: string;
  }
  const [loading, setLoading] = useState(false)
  const {toast} = useToast()
  const onSubmit = async(data: any) => {
    try {
      console.log(data);
      const response = await SendContact({
        to: data.email,
        subject: "Mensaje de contacto",
        templateId: 1,
        firstName: data.name + " " + data.lastname,
      });
      if(response.error){
        throw response.error
      }
      setLoading(true)
      reset()
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar el mensaje",
      })
      console.log(error);
      
    }
  }
  return (
    <main className={"pb-14"}>
      <Header title="Contacto" />
      {loading &&   <div className="flex flex-col justify-center  animate-fadeIn items-center animation-FadeIn mt-14 w-4/6 mx-auto gap-10 rounded-2xl bg-gray-50 p-14" >
        <h1 className="text-4xl font-semibold">Gracias por contactarnos </h1>
        <Check size={100} className="text-primary"/>
      </div>}
    
 
      {!loading &&<div className="grid grid-cols-2 mt-14 w-4/6 mx-auto gap-10 rounded-2xl bg-gray-50 p-14" >
      <div className="col-span-2">
      <h1 className=" text-4xl font-semibold">Envianos un mensaje</h1>
      <p className=" ">y te responderemos a la brevedad</p>
      </div>
       
        <div><Input value={watch("name")}  type="text" placeholder="Nombre" {...register("name", { required: true })} />
        {errors.name && <span>Este campo es requerido</span>}</div>
        <div>

        <Input type="text" value={watch("lastname")} placeholder="Apellido" {...register("lastname", { required: true })} />
        {errors.lastname && <span>Este campo es requerido</span>}
        </div>
        <div>
        <Input type="email" placeholder="Email" value={watch("email")} {...register("email", { required: true })} />
        {errors.lastname && <span>Este campo es requerido</span>}
        </div>
       

        <Button className="col-span-2 mx-auto"  onClick={handleSubmit(onSubmit)} size={'lg'}>Enviar </Button>
      </div> }
     
    </main>
  );
};
export default Page;
