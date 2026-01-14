import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-4 px-8 mt-auto border-t border-border">
      <div className="container mx-auto flex justify-center items-center">
        <Button asChild>
          <Link href="/orders" className="flex items-center gap-2">
            <ShoppingCart size={18} />
            <span>Orders</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
}
