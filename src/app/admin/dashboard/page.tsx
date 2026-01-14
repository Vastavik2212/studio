"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrders } from "@/context/order-context";
import { useAdminAuth } from "@/context/admin-auth-context";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";

export default function AdminDashboardPage() {
  const { orders } = useOrders();
  const { isAdmin } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.replace("/admin/login");
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    // You can render a loading spinner or null here
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Gallery
          </Link>
        </div>
        <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-8 text-center">Admin Dashboard: All Orders</h1>
        {orders.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">There are no orders yet.</p>
            <Button asChild>
              <Link href="/">Browse Cakes</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={order.cake.image.imageUrl}
                      alt={order.cake.name}
                      fill
                      className="object-cover"
                      data-ai-hint={order.cake.image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="font-headline text-xl font-bold leading-snug truncate mb-2">{order.cake.name}</CardTitle>
                  <p className="text-lg font-semibold text-primary">
                    ₹{order.cake.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pickup: {format(new Date(order.pickupDate), "PPP")} at {order.pickupTime}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
