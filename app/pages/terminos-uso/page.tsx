import { Header } from "../component";

const Page = () => {
  return (
    <div className="">
      <Header title="Términos y Condiciones de Uso" />
      <div className="flex flex-col justify-start gap-y-14  items-start p-14 w-5/6 lg:w-4/5 mx-auto ">
        <div>
          <h6 className="font-bold">1. Introducción</h6>
          <p className="mt-5">
            Bienvenido a https://ademproemp.cl. Al acceder y utilizar nuestro
            sitio web, aceptas cumplir y estar sujeto a los siguientes términos
            y condiciones de uso, que junto con nuestra política de privacidad
            rigen la relación entre Adem y tú en relación con este sitio web. Si
            no estás de acuerdo con alguna parte de estos términos, por favor no
            utilices nuestro sitio web.
          </p>
        </div>
        <div>
          <h6 className="font-bold">2. Uso del Sitio Web</h6>
          <p className="mt-5">
            El contenido de las páginas de este sitio web es solo para tu
            información y uso general. Está sujeto a cambios sin previo aviso.
            Ni nosotros ni terceros proporcionamos ninguna garantía sobre la
            exactitud, puntualidad, rendimiento, integridad o idoneidad de la
            información y los materiales encontrados u ofrecidos en este sitio
            para cualquier propósito en particular.
          </p>
        </div>
        <div>
          <h6 className="font-bold">3. Propiedad Intelectual</h6>
          <p className="mt-5">
            Este sitio web contiene material que es propiedad de o está
            licenciado por nosotros. Este material incluye, pero no se limita a,
            el diseño, disposición, apariencia y gráficos. Queda prohibida
            cualquier reproducción que no sea conforme con el aviso de
            copyright, que forma parte de estos términos y condiciones.
          </p>
        </div>
        <div>
          <h6 className="font-bold">4. Enlaces Externos</h6>
          <p className="mt-5">
            Este sitio web puede incluir enlaces a otros sitios web. Estos
            enlaces se proporcionan para tu conveniencia y no significan que
            respaldemos el sitio web(s). No tenemos responsabilidad alguna por
            el contenido de los sitios web enlazados.
          </p>
        </div>
        <div>
          <h6 className="font-bold">5. Responsabilidad Limitada</h6>
          <p className="mt-5">
            En ningún caso Adem será responsable por cualquier daño directo,
            indirecto, incidental, especial o consecuente que resulte del uso o
            la imposibilidad de uso del sitio web, incluso si Adem ha sido
            informado de la posibilidad de tales daños.
          </p>
        </div>
        <div>
          <h6 className="font-bold">6. Limitación de Responsabilidad</h6>
          <p className="mt-5">
            Nos reservamos el derecho a modificar estos términos y condiciones
            en cualquier momento. Las modificaciones entrarán en vigor en el
            momento de su publicación en el sitio web. Es tu responsabilidad
            revisar periódicamente los términos y condiciones para estar
            informado de cualquier cambio.
          </p>
        </div>
        <div>
          <h6 className="font-bold">7. Propiedad Intelectual</h6>
          <p className="mt-5">
            Estos términos y condiciones se regirán e interpretarán de acuerdo
            con las leyes de Chile. Cualquier disputa que surja relacionada con
            estos términos estará sujeta a la jurisdicción exclusiva de los
            tribunales de Chile.
          </p>
        </div>
        <div>
          <h6 className="font-bold">8. Aviso Legal</h6>
          <p className="mt-5">
            Si tienes alguna pregunta sobre estos términos de uso, puedes
            contactarnos en:
          </p>
          <p>
            <strong>Email:</strong> admin@ademproemp.cl
          </p>
        </div>

        <p>
          <em>Fecha de última actualización: 18/10/2024</em>
        </p>
      </div>
    </div>
  );
};
export default Page;
