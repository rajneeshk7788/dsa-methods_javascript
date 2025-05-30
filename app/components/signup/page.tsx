'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";   
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// API base URL
const API_BASE_URL = "http://localhost:4000";

// Define the Zod schema for the signup form
const signupFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  address: z.string().min(1, { message: "Address is required." }),
  phone: z.string().min(10, { message: "Phone Number must be at least 10 digits." }), 
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

const SignupPage = () => {
  const router = useRouter();
  const [isVerificationDialogOpen, setIsVerificationDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize the form with react-hook-form and zodResolver
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle signup API call
  const handleSignup = async (values: z.infer<typeof signupFormSchema>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      setIsVerificationDialogOpen(true);
      
      // Redirect to login page after successful signup
      setTimeout(() => {
        router.push('/components/login');
      }, 2000); // Redirect after 2 seconds to show the success message
    } catch (error) {
      console.error("Signup error:", error);
      setError(error instanceof Error ? error.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Define the onSubmit handler
  const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
    await handleSignup(values);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Sign Up</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Full Name</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Username</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Email</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address Field */}
             <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Address</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number Field */}
             <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2' >Phone Number</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Phone Number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Password</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className='flex w-full justify-between'>
                  <FormLabel className='w-1/2'>Confirm Password</FormLabel>
                  <FormControl className='w-full'>
                    <Input placeholder="Confirm Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account? <Link href="/components/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400">Login</Link>
        </p>

        <Dialog open={isVerificationDialogOpen} onOpenChange={setIsVerificationDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Signup Successful!</DialogTitle>
              <DialogDescription>
                Your account has been created successfully. You will be redirected to the login page.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default SignupPage; 