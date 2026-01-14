import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { OrderProvider } from '@/context/order-context';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Sweet Gallery',
  description: 'Handcrafted cakes for every occasion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased flex flex-col min-h-screen")}>
        <OrderProvider>
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </OrderProvider>
        <Toaster />
      </body>
    </html>
  );
}
