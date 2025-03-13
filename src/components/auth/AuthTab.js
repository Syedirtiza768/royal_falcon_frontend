import React from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import LoginForm from "./LoginForm";

function AuthTab() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      {/* Login Form */}
      <TabsContent value="login" className="mt-6">
        {/* <LoginForm /> */}
      </TabsContent>

      {/* Register Form */}
      <TabsContent value="register" className="mt-6">
        ss
      </TabsContent>
    </Tabs>
  );
}

export default AuthTab;
