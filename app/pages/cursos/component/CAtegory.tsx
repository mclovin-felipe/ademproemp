import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Categoria = ({
  children,
  titulo,
}: {
  children: React.ReactNode;
  titulo: string;
}) => {
  return (
    <div className="w-full bg-primary/5 p-5 flex flex-col gap-y-5 rounded-lg ">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">{titulo}</AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Categoria;
