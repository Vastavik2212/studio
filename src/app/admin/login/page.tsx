
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAdminAuth } from "@/context/admin-auth-context";
import { SweetGalleryIcon } from "@/components/icons";

export default function AdminLoginPage() {
  const [bakeryName, setBakeryName] = useState("");
  const [mobile, setMobile] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const { isAdmin, login } = useAdminAuth();

  useEffect(() => {
    if (isAdmin) {
      router.replace("/admin/dashboard");
    }
  }, [isAdmin, router]);

  const handleLogin = async () => {
    const success = await login(bakeryName, mobile);
    if (success) {
      toast({
        title: "Login Successful",
        description: "Redirecting to admin dashboard...",
      });
      router.push("/admin/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Your credentials have been saved. Please try logging in again.",
      });
    }
  };
  
  if (isAdmin) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
       <div className="absolute top-8 flex items-center gap-3 sm:gap-4">
        <SweetGalleryIcon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        <div>
          <h1 className="font-headline text-3xl sm:text-4xl tracking-tight font-bold text-foreground">
            Sweet Gallery
          </h1>
        </div>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bakery-name">Bakery Name</Label>
            <Input
              id="bakery-name"
              placeholder="e.g., Sweet Gallery"
              value={bakeryName}
              onChange={(e) => setBakeryName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mobile">Mobile No.</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="e.g., 9876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
