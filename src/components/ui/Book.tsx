import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/components/Button";

interface BookProps {
  trigger?: React.ReactNode;
}

const Book: React.FC<BookProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-blue-600">
            Rent Your Car
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill in your details to book your car now.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <Label htmlFor="pickup-date">Pickup Date</Label>
            <Input id="pickup-date" type="date" />
          </div>

          <div>
            <Label htmlFor="return-date">Return Date</Label>
            <Input id="return-date" type="date" />
          </div>

          <Button
                content="Confirm Booking"
           />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Book;
