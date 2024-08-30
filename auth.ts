import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth";
import { User } from "next-auth";
import { getUserByID } from "./app/dashboard/services/users";

interface CustomUser extends User {
  token: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,

  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        rut: {
          label: "RUT",
          type: "text",
          placeholder: "RUT",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      authorize: async (credentials): Promise<CustomUser | null> => {
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);
        try {
          const response = await login({
            rut: credentials?.rut as string,
            password: credentials?.password as string,
          });
          if (response.data?.token) {
            // Retorna el objeto del usuario
            return {
              id: credentials.rut as string, // Identificador único del usuario
              token: response.data.token, // El token de autenticación
            };
          } else {
            // Si no se pudo autenticar, retornas null
            return null;
          }
        } catch (error) {
          return null;
        }
        // logic to verify if the user exists

        // Verifica si la autenticación fue exitosa
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // how long (seconds) a user's session is valid before expiring
    maxAge: 604800, // 5days
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accessToken = user.token;
      }
      // if (Date.now() >= token.exp) {
      //   return Promise.resolve({}); // Expired token
      // }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Agrega el token de acceso a la sesión
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({}) {
      return "/dashboard";
    },
  },
  events: {
    async signOut(message) {
      console.log(message);
    },
  },
});
