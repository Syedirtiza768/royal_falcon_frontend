"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { sendEmail } from "@/app/[lang]/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ContactSectionForm({ dictionary }) {
  const [loading, setLoading] = useState(false);

  // Create a schema based on the dictionary language
  const createFormSchema = () => {
    return z.object({
      firstName: z.string().min(2, {
        message: "Must be at least 2 characters",
      }),
      lastName: z.string().min(2, {
        message: "Must be at least 2 characters",
      }),
      email: z.string().email({
        message: "Invalid email address",
      }),
      phone: z
        .string()
        .min(8, { message: "Phone number must be at least 8 digits" })
        .max(15, { message: "Phone number must be at most 15 digits" }) // Optional max limit
        .regex(/^\d+$/, { message: "Phone number must contain only numbers" }),

      message: z.string().min(1, {
        message: "Message is required",
      }),
    });
  };

  const formSchema = createFormSchema();

  // Define form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);

    try {
      const response = await sendEmail(data);
      toast.success(response.message);

      if (response.success) {
        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  {dictionary.firstNameLabel}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={dictionary.firstNameLabel}
                    className="w-full px-4 py-2 rounded-md text-[14px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  {dictionary.lastNameLabel}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={dictionary.lastNameLabel}
                    className="w-full px-4 py-2 rounded-md text-[14px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  {dictionary.emailLabel}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dictionary.emailLabel}
                    className="w-full px-4 py-2 rounded-md text-[14px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  {dictionary.phoneLabel}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={dictionary.phoneLabel}
                    className="w-full px-4 py-2 rounded-md text-[14px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                {dictionary.messageLabel || "Message"}{" "}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <textarea
                  placeholder={dictionary.messageLabel || "Your message"}
                  className="w-full px-4 py-2 rounded-md text-[14px] border min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs mt-1" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer md:w-auto px-8 py-2 bg-[#C08B67] hover:bg-[#A77555] text-white font-medium rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : dictionary.conactSubmitLabel}
        </Button>
      </form>
    </Form>
  );
}
