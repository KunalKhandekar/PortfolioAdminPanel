"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const TagInput = ({ label, tags, onAdd, onRemove, placeholder }) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue("");
    }
  };

  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Badge
            key={i}
            variant="outline"
            className="flex items-center gap-2 px-3 py-1 rounded-lg"
          >
            <span className="truncate max-w-[200px]">{tag}</span>
            <button type="button" onClick={() => onRemove(i)}>
              ×
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <Button type="button" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
};
