"use client";

import { useState } from "react";
import { cakeData, cakeCategories } from "@/lib/cake-data";
import { CakeCard } from "./cake-card";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

export function CakeGallery() {
  const [filter, setFilter] = useState("All");

  const filteredCakes =
    filter === "All" ? cakeData : cakeData.filter((cake) => cake.category === filter);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter size={16}/>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {cakeCategories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      {filteredCakes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredCakes.map((cake, index) => (
            <div key={cake.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CakeCard cake={cake} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No cakes found for this category.</p>
        </div>
      )}
    </div>
  );
}
