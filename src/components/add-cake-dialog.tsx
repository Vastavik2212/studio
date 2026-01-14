"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";
import { useCakeData } from "@/context/cake-context";
import { cakeCategories } from "@/lib/cake-data";

export function AddCakeDialog() {
  const { addCake } = useCakeData();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<any>();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleAddCake = () => {
    if (!name || !price || !category || !description || !imageUrl || !ingredients) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill out all fields to add a new cake.",
      });
      return;
    }

    const newCake = {
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      price: parseFloat(price),
      category,
      description,
      image: {
        id: name.toLowerCase().replace(/\s+/g, "-"),
        imageUrl,
        imageHint: name,
        description: description,
      },
      ingredients: ingredients.split(",").map((i) => i.trim()),
    };

    addCake(newCake);

    toast({
      title: "Cake Added!",
      description: `${name} has been added to the gallery.`,
    });

    // Reset form and close dialog
    setName("");
    setPrice("");
    setCategory(undefined);
    setDescription("");
    setImageUrl("");
    setIngredients("");
    setOpen(false);
  };

  const categories = cakeCategories.filter(c => c !== 'All');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle size={18} />
          <span>Add Cake</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Add a New Cake</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new cake to the gallery.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" placeholder="e.g., Classic Chocolate Fudge"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price (₹)
            </Label>
            <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="col-span-3" placeholder="e.g., 45.00"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right pt-2">
              Description
            </Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" placeholder="A rich and decadent..."/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Image URL
            </Label>
            <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="col-span-3" placeholder="https://images.unsplash.com/..."/>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="ingredients" className="text-right pt-2">
              Ingredients
            </Label>
            <Textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="col-span-3" placeholder="Flour, Sugar, Cocoa Powder... (comma-separated)"/>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleAddCake}>Add Cake</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
