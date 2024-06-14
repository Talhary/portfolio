"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/utils/schemas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser'

export function Mail() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
   console.log(values)
    try {
    
      } catch (err) {
      setError("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" text-secondary1-dark-active dark:bg-dark-bg flex items-center justify-center min-h-screen  bg-blue-100">
      <div className="w-full dark:bg-card-bg max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg dark:text-white ">
        <h2 className="text-2xl font-bold text-center ">Get in Touch</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-primary1-dark" >First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel  className=" text-primary1-dark" >Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel  className=" text-primary1-dark" >Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel  className=" text-primary1-dark" >Message</FormLabel>
                  <FormControl>
                    <textarea className= "dark:bg-card-bg focus:border-text-secondary-dark border w-full p-2 border-secondary1-dark-hover" placeholder="Enter your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={'outline'} type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </Form>
        {isSuccess && <p className="text-green-500">Email sent successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
