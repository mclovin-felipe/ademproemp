import { Inputs } from "@/types/input";

export const inputs: Inputs[] = [
  {
    name: "rut",
    title: "RUT",
    placeholder: "11111111-1",
    rules: {
      required: { value: true, message: "El RUT es requerido" },
      minLength: { value: 8, message: "El RUT debe tener 8 caracteres" },
      maxLength: { value: 10, message: "El RUT debe tener 8 caracteres" },
    },
  },
  {
    name: "firstName",
    title: "Nombre",
    placeholder: "Nombre",
    rules: {
      required: {
        value: true,
        message: "El nombre es requerido",
      },
      minLength: { value: 3, message: "El nombre debe tener 3 caracteres" },
      maxLength: { value: 20, message: "El nombre debe tener 20 caracteres" },
    },
  },
  {
    name: "lastName",
    title: "Apellido",
    placeholder: "Apellido",
    rules: {
      required: {
        value: true,
        message: "El apellido es requerido",
      },
      minLength: { value: 3, message: "El apellido debe tener 3 caracteres" },
      maxLength: { value: 20, message: "El apellido debe tener 20 caracteres" },
    },
  },
  {
    name: "email",
    title: "Email",
    placeholder: "Email",
    rules: {
      required: {
        value: true,
        message: "El email es requerido",
      },
      minLength: { value: 5, message: "El email debe tener 5 caracteres" },
      maxLength: { value: 50, message: "El email debe tener 50 caracteres" },
    },
  },
  {
    name: "phone",
    title: "Teléfono",
    placeholder: "Teléfono",
    rules: {
      required: {
        value: true,
        message: "El teléfono es requerido",
      },
      minLength: { value: 9, message: "El teléfono debe tener 10 caracteres" },
      maxLength: { value: 10, message: "El teléfono debe tener 15 caracteres" },
    },
  },
  {
    name: "password",
    title: "Contraseña",
    placeholder: "Contraseña",
    noVisible: true,
    rules: {
      required: {
        value: true,
        message: "La contraseña es requerida",
      },
      minLength: {
        value: 8,
        message: "La contraseña debe tener 8 caracteres",
      },
      maxLength: {
        value: 20,
        message: "La contraseña debe tener 20 caracteres",
      },
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
        message: "La contraseña debe tener 8 caracteres",
      },
    },
  },
];
