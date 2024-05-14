"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Detalle = () => {
  const [tab, setTab] = useState(0);
  return (
    <section>
      <div className="flex flex-wrap lg:flex-row justify-between gap-5 py-14">
        {Tabs.map((item, index) => (
          <Button
            onClick={() => setTab(index)}
            variant={tab === index ? "default" : "outline"}
            className="w-1/4 lg:w-1/3 "
          >
            {item}
          </Button>
        ))}
      </div>
      {tab === 0 && (
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl font-bold">Resumen del curso</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at
            obcaecati id quis blanditiis quisquam animi inventore, maiores
            soluta saepe eveniet rerum expedita ab, unde, accusamus aperiam hic.
            Debitis, cumque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam enim in, illo harum repudiandae vel sed. Ex, facere?
            Suscipit natus reprehenderit officiis, asperiores id at nam error?
            Eligendi, impedit mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at
            obcaecati id quis blanditiis quisquam animi inventore, maiores
            soluta saepe eveniet rerum expedita ab, unde, accusamus aperiam hic.
            Debitis, cumque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam enim in, illo harum repudiandae vel sed. Ex, facere?
            Suscipit natus reprehenderit officiis, asperiores id at nam error?
            Eligendi, impedit mollitia.
          </p>
          <h1 className="text-4xl font-bold">Que aprenderas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="grid lg:grid-cols-2 gap-x-5">
            {[...Array(2)].map((_, i) => (
              <div className="rounded-md border border-gray-100 p-10">
                <h1 className="text-2xl font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit at obcaecati id quis blanditiis quisquam animi
                  inventore, maiores soluta saepe eveniet rerum expedita ab,
                  unde, accusamus aperiam hic.
                </p>
              </div>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ex quam, suscipit quos qui ipsam veniam et voluptate veritatis,
            aspernatur eum voluptatem nobis saepe error, necessitatibus
            doloremque tenetur! Ipsa, officiis!
          </p>
        </div>
      )}
    </section>
  );
};
const Tabs = ["Resumen", "Curriculum", "Instructor", "FAQ", "Opiniones"];
export default Detalle;
