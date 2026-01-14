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
import { useToast } from "@/hooks/use-toast";
import adminData from "@/lib/admin-data.json";

export function AdminLoginDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [bakeryName, setBakeryName] = useState("");
  const [mobile, setMobile] = useState("");
  const { toast } = useToast();

  const handleLogin = () => {
    if (bakeryName === adminData.bakeryName && mobile === adminData.mobile) {
      toast({
        title: "Login Successful",
        description: "Welcome, Admin!",
      });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Admin Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to access the admin dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bakery-name" className="text-right">
              Bakery Name
            </Label>
            <Input
              id="bakery-name"
              placeholder="e.g., Sweet Gallery"
              className="col-span-3"
              value={bakeryName}
              onChange={(e) => setBakeryName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile No.
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="e.g., 9876543210"
              className="col-span-3"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleLogin}>Login</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
