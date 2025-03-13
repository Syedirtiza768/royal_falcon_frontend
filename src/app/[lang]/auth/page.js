"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthTab from "@/components/auth/AuthTab";

export default function AuthScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row">
      {/* Left side - Image */}
      <div className="relative hidden w-full md:block md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40" />
        <img
          src="/images/auth.jpg"
          alt="Authentication"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="mt-4 max-w-md text-lg">
            Sign in to continue your journey with us and unlock a world of
            possibilities.
          </p>
        </div>
      </div>

      {/* Right side - Auth forms */}
      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8 px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Access your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your journey with us continues here
            </p>
          </div>

          <AuthTab />
        </div>
      </div>
    </div>
  );
}
