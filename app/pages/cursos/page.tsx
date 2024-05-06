"use client";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, Rows3, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import CardCurso from "@/app/components/global/cardCurso";
import { useState } from "react";
import Header from "@/app/components/layout/header";
const Page = () => {
  const [horizontal, setHorizontal] = useState(false);
  return (
    // TODO: CAMBIAR IMAGENES
    <div>
      <Header image="/profesor.png" titulo="Nuestros cursos" />
      <div className="flex flex-row justify-between w-5/6 mx-auto mt-14 bg-card border p-4 rounded-lg ">
        <div className="">
          <Button variant={"ghost"} onClick={() => setHorizontal(false)}>
            <Table />
          </Button>
          <Button variant={"ghost"} onClick={() => setHorizontal(true)}>
            <Rows3 />
          </Button>
        </div>
        <div className="flex flex-row gap-x-5 ">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* CUERPO CURSOS */}
      <div className="w-5/6 mx-auto grid grid-cols-7 gap-x-5 mt-14">
        <div className="col-span-2 flex flex-col gap-y-5">
          <div className="w-full bg-primary/5 p-5 flex flex-row rounded-lg ">
            <Input className="h-14 bg-primary/10" placeholder="Buscar" />
            <Button className="h-full -ml-3">
              <Search color="white" />
            </Button>
          </div>
          <div className="w-full bg-primary/5 p-5 flex flex-col gap-y-5 rounded-lg ">
            <h1 className="text-xl font-bold">Categorias</h1>
            {[...Array(7)].map((item) => (
              <div className="flex items-center space-x-2 border-b pb-5">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
          </div>
          <div className="w-full bg-primary/5 p-5 flex flex-col gap-y-5 rounded-lg ">
            <h1 className="text-xl font-bold">Tutores</h1>
            {[...Array(3)].map((item) => (
              <div className="flex items-center space-x-2 border-b pb-5">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
          </div>
          <div className="w-full bg-primary/5 p-5 flex flex-col gap-y-5 rounded-lg ">
            <h1 className="text-xl font-bold">Precios</h1>
            {[...Array(2)].map((item) => (
              <div className="flex items-center space-x-2 border-b pb-5">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
            <h1 className="text-xl font-bold">Filtrar</h1>
            <Slider defaultValue={[50]} max={100} step={1} />
            <p>Precio $40.000 - $100.000</p>
          </div>
        </div>
        <div className="col-span-5 flex flex-wrap justify-between  gap-y-5">
          <CardCurso
            horizontal={horizontal}
            item={{
              titulo: "UX/UI Diseño para principiantes",
              precio: 300000,
              precioAntes: 200000,
              duracion: "22 hr 30 min",
              cursos: 34,
              ventas: 250,
              profesor: "Willium carry",
              calificacion: 5,
              calificaciones: 40,
            }}
            home={false}
          />
          <CardCurso
            horizontal={horizontal}
            item={{
              titulo: "UX/UI Diseño para principiantes",
              precio: 300000,
              precioAntes: 200000,
              duracion: "22 hr 30 min",
              cursos: 34,
              ventas: 250,
              profesor: "Willium carry",
              calificacion: 5,
              calificaciones: 40,
            }}
            home={false}
          />
          <CardCurso
            horizontal={horizontal}
            item={{
              titulo: "UX/UI Diseño para principiantes",
              precio: 300000,
              precioAntes: 200000,
              duracion: "22 hr 30 min",
              cursos: 34,
              ventas: 250,
              profesor: "Willium carry",
              calificacion: 5,
              calificaciones: 40,
            }}
            home={false}
          />
          <CardCurso
            horizontal={horizontal}
            item={{
              titulo: "UX/UI Diseño para principiantes",
              precio: 300000,
              precioAntes: 200000,
              duracion: "22 hr 30 min",
              cursos: 34,
              ventas: 250,
              profesor: "Willium carry",
              calificacion: 5,
              calificaciones: 40,
            }}
            home={false}
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
