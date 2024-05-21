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
import { CardCurso, Header } from "@/app/components";

import { useEffect, useState } from "react";
import Categoria from "./component/CAtegory";
import useIsMobile from "@/app/hook/useCelular";
import SearchBox from "@/app/components/global/searchBox";

const Page = () => {
  const [horizontal, setHorizontal] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isMobile) setHorizontal(true);
  }, [isMobile]);

  return (
    // TODO: CAMBIAR IMAGENES
    <div>
      <Header image="/profesor.png" titulo="Nuestros cursos" />
      <div className="flex flex-row justify-between w-5/6 mx-auto mt-14 bg-card border p-4 rounded-lg ">
        <div className="hidden lg:flex">
          <Button variant={"ghost"} onClick={() => setHorizontal(false)}>
            <Table />
          </Button>
          <Button variant={"ghost"} onClick={() => setHorizontal(true)}>
            <Rows3 />
          </Button>
        </div>
        <div className="flex flex-row gap-x-5 justify-center items-center ">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className=" ">
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
        <div className=" col-span-7  lg:col-span-2  flex flex-col gap-y-5">
          <SearchBox />
          <Categoria titulo="Categoria">
            {[...Array(7)].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-2 border-b pb-5"
              >
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
          </Categoria>
          <Categoria titulo="Tutores">
            {[...Array(3)].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-2 border-b pb-5"
              >
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
          </Categoria>
          <Categoria titulo="Precios">
            {[...Array(2)].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-2 border-b pb-5"
              >
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing
                </Label>
              </div>
            ))}
            <h1 className="text-xl font-bold">Precios</h1>

            <h1 className="text-xl font-bold">Filtrar</h1>
            <Slider defaultValue={[50]} max={100} step={1} />
            <p>Precio $40.000 - $100.000</p>
          </Categoria>
        </div>
        <div className=" col-span-7 lg:col-span-5 flex flex-wrap justify-center gap-5 mt-14 lg:mt-0 ">
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
