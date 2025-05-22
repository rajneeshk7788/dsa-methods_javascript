'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/lib/features/sidebarSlice';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from '@/components/ui/input';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newMethod, setNewMethod] = useState({
    title: '',
    url: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addItem({
      title: newMethod.title,
      url: newMethod.url,
      icon: "👉"
    }));
    setNewMethod({ title: '', url: '' });
    setIsFormOpen(false);
  };

  return (
    <nav className="bg-white/30 h-15 sticky align-middle dark:bg-gray-900/30 w-full z-20 top-0 start-0 border-b border-gray-200/40 dark:border-gray-600/40 shadow-sm backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">

        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity">
      <SidebarTrigger />
          Java Script
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          <Dialog>
              <DialogTrigger asChild  >
                <Button>Add Method</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Method</DialogTitle>
                  <DialogDescription>
                    Add a new method to the sidebar. Fill in the details below.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={newMethod.title}
                        onChange={(e) => setNewMethod({ ...newMethod, title: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url" className="text-right">
                        URL
                      </Label>
                      <Input
                        id="url"
                        value={newMethod.url}
                        onChange={(e) => setNewMethod({ ...newMethod, url: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add Method</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          <ModeToggle />

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-[200px] sm:w-[200px]">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold mb-6">Menu</SheetTitle>
                  <SheetDescription className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className="text-lg text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      Home
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          className="text-lg text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 text-left"
                        >
                          Add Method
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add New Method</DialogTitle>
                          <DialogDescription>
                            Add a new method to the sidebar. Fill in the details below.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="title" className="text-right">
                                Title
                              </Label>
                              <Input
                                id="title"
                                value={newMethod.title}
                                onChange={(e) => setNewMethod({ ...newMethod, title: e.target.value })}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="url" className="text-right">
                                URL
                              </Label>
                              <Input
                                id="url"
                                value={newMethod.url}
                                onChange={(e) => setNewMethod({ ...newMethod, url: e.target.value })}
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Add Method</Button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <Link
                      href="/about"
                      className="text-lg text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      About
                    </Link>
                    <Link
                      href="/services"
                      className="text-lg text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      Services
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;