"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { toast } from "react-toastify";
import { submitApplication } from "@/app/[lang]/careers2/actions";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" }) // Optional max limit
    .regex(/^\d+$/, { message: "Phone number must contain only numbers" }),
  cv: z
    .instanceof(File)
    .refine((file) => file.size > 0, "CV is required")
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "File size must be less than 5MB"
    )
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only PDF and Word documents are accepted"
    ),
});

export default function CareerForm({ dictionary }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });
  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Append all form fields to FormData
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "cv") {
          formData.append(key, value);
        }
      });

      // Append CV file
      formData.append("cv", values.cv);

      await submitApplication(formData);

      setIsSuccess(true);
      toast.success({
        title: dictionary.CareerSuccessToast,
        description: dictionary.CareerSuccessToastDescription,
      });
    } catch (error) {
      console.error(error);
      toast.error({
        title: dictionary.CareerErrorToast,
        description: dictionary.CareerErrorToastDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{dictionary.CareersHeading3}</CardTitle>
          <CardDescription>{dictionary.CareersDescription3}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-primary">
              {dictionary.CareersHeading4}
            </h3>
            <p className="text-muted-foreground mt-2">
              {dictionary.CareersDescription4}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full cursor-pointer"
            onClick={() => router.push("/")}
          >
            {dictionary.CareersHeading5}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.CareersHeading1}</CardTitle>
        <CardDescription>
          {dictionary.CareersHeading1Description}
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.CareersFormNameLabel} *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={dictionary.CareersFormNameLabel}
                      {...field}
                    />
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
                  <FormLabel>{dictionary.CareersFormEmailLabel} *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={dictionary.CareersFormEmailLabel}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.CareersFormPhoneLabel} *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={dictionary.CareersFormPhoneLabel}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>{dictionary.CareersFormResumeLabel} *</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                          }
                        }}
                        {...fieldProps}
                        className="flex-1"
                      />
                      <div className="shrink-0">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          disabled
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    {dictionary.CareersFormResumeLabel2}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full cursor-pointer mt-5"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {dictionary.CareersFormSubmitLabel1}
                </>
              ) : (
                dictionary.CareersFormSubmitLabel2
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
