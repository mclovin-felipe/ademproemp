import api from "@/lib/api";
import { Contacto } from "@/types/contact";

export const SendContact = async(data:Contacto) =>{
    try {
        const response = await api.post("v1/email/send", data);
        return response.data;
    } catch (error) {
        throw error;
    }
   
} 