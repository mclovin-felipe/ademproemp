import { use, useEffect, useState } from "react";
import NoNoticia from "./noNoticia";
import api from "@/lib/api";
import Image from "next/image";
import { Article } from "@/types/news";
const Noticias = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [noticias, setNoticias]= useState<Article[]>([])
    const GetArcticles = async() =>{
        try {
            const response = await api.get("v1/news/findAll")
            console.log(response.data.data, 'noti');
            setNoticias(response.data.data)
        } catch (error) {
            throw error;
            
        }
     
    }
    useEffect(() => {
        GetArcticles();
    }, [])
    if(error){
        return( <div className="bg-blue-50 w-full py-14">
                <h1>error</h1>
                </div>
            )
    }
    if(loading){
        return( <div className="bg-blue-50 w-full py-14">
                <h1>loading</h1>
                </div>
            )
    }
    const Noticia = ({id}:{id:number}) =>{
        return(<div className="flex flex-col items-end justify-end relative">
            <div className="h-full w-full  absolute" >
                <Image 
                    src={noticias[id].media || ""}
                    alt="profesor"
                    fill
                    className="object-cover rounded-md  "
                    />
                    <div className="w-full h-full absolute z-30 bg-black/30 rounded-md " ></div>
            </div>
            <div className="bg-white w-4/6 rounded-md flex justify-center items-center min-h-[200px] z-40">


            <h1 className="z-40 text-3xl text-black font-semibold ">{noticias[id].title}</h1>

            </div>

      </div>)
    }
    return( <div className="bg-blue-50 w-full py-14">
        <div className="w-5/6 mx-auto flex flex-col gap-y-5 items-start justify-center">
          {/* <Badge text="Noticias" /> */}
          <h1 className="text-4xl font-bold">Noticias</h1>
          <div className="grid lg:grid-cols-2 gap-x-5 h-[650px] w-full">
          {noticias[0] ? <Noticia id={0}/>:<NoNoticia/>}
          <div className="flex flex-col gap-y-5 lg:mt-0 mt-5">
          {noticias[1] ? <Noticia id={1}/>:<NoNoticia/>}

          {noticias[2] ? <Noticia id={2}/>:<NoNoticia/>}

            </div>
          </div>
        </div>
      </div>)
}
export default Noticias;