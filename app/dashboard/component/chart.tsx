"use client";
import { ClassifiedData } from "@/types/cursos";
import { X } from "lucide-react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
  Legend,
  Line,
  Label,
} from "recharts";

const Chart = ({ inscriptions }: { inscriptions: ClassifiedData[] }) => {
  console.log(inscriptions);
  return (
    <BarChart width={800} height={250} data={inscriptions}>
      <Bar
        dataKey="count"
        fill="#fff"
        isAnimationActive
        style={{
          borderRadius: 10,
        }}
      />
      <XAxis dataKey="month"></XAxis>
      <Legend
        verticalAlign="top"
        height={36}
        payload={[
          {
            value: "N de inscripciones / mes",
            type: "square",
            id: "count",
          },
        ]}
      />
      <YAxis></YAxis>
      <Line
        name="pv of pages"
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
      />
    </BarChart>
  );
};
export default Chart;
