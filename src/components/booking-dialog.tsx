"use client";

import { useState } from "react";
import type { Cake } from "@/lib/cake-data";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock } from "lucide-react";
import { format } from "date-fns";

type BookingDialogProps = {
  cake: Cake;
};

export function BookingDialog({ cake }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const handleBooking = () => {
    if (date && time) {
      toast({
        title: "Booking Confirmed!",
        description: `Your order for ${cake.name} is confirmed for pickup on ${format(date, "PPP")} at ${time}.`,
      });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Incomplete Information",
        description: "Please select a date and time for pickup.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          <CalendarDays className="mr-2 h-5 w-5" />
          Book for Pickup or Delivery
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Book: {cake.name}</DialogTitle>
          <DialogDescription>
            Select a date and time for pickup.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
              className="rounded-md border"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Time</span>
            </div>
            <div className="col-span-3">
              <Select onValueChange={setTime} value={time}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleBooking}>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
