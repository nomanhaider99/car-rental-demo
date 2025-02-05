'use client'

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
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface BookProps {
  trigger?: React.ReactNode;
}

interface FormData {
  name: string;
  email: string;
  pickupDate: string;
  returnDate: string;
}

const Book: React.FC<BookProps> = ({ trigger }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = () => {
    toast({
      title: 'Car Book Successfully',
      description: 'You will be further Notified with all the information.'
    });
    router.refresh();
  };

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

        {/* Wrap the inputs in a form and attach the handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="pickup-date">Pickup Date</Label>
            <Input
              id="pickup-date"
              type="date"
              {...register("pickupDate", { required: "Pickup date is required" })}
            />
            {errors.pickupDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pickupDate.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="return-date">Return Date</Label>
            <Input
              id="return-date"
              type="date"
              {...register("returnDate", { required: "Return date is required" })}
            />
            {errors.returnDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.returnDate.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            content="Confirm Booking" />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Book;
