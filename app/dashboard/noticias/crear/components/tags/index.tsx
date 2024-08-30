"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import React, { useState } from "react";
const Tags = ({
  tags,
  setTags,
  home = false,
}: {
  tags: string[];
  setTags?: any;
  home: boolean;
}) => {
  const [tag, setTag] = useState<string>("");
  const HandleTag = () => {
    setTags([...tags, tag]);

    setTag("");
  };
  return (
    <div className="flex flex-col gap-y-5">
      {home && (
        <div>
          <h5>Inserta tags de la noticia</h5>
          <div className="flex flex-row max-w-md">
            <Input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="border-t border-l border-b border-gray-400  rounded-r-none"
            />
            <Button
              type="button"
              disabled={tag === ""}
              className="rounded-l-none"
              onClick={() => HandleTag()}
            >
              Agregar
            </Button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {tags !== undefined &&
          tags.map((tag, index) => (
            <Badge key={index} className="text-md">
              {home && (
                <X onClick={() => setTags(tags.filter((t) => t !== tag))} />
              )}
              {tag}
            </Badge>
          ))}
      </div>
    </div>
  );
};
export default Tags;
