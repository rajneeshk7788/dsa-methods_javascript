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
} from "@/components/ui/sheet";
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
import { usePathname } from 'next/navigation';

// Define navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/notes', label: 'Notes' },
  { href: '/components/About', label: 'About' },
  { href: '/components/Contact', label: 'Contact' },
  { href: '/components/login', label: 'Login' },
  { href: '/components/signup', label: 'Signup' }
];

// Reusable Add Method Form
const AddMethodForm = ({ newMethod, setNewMethod, onSubmit }: any) => (
  <form onSubmit={onSubmit}>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input
          id="title"
          value={newMethod.title}
          onChange={(e) => setNewMethod((prev: any) => ({ ...prev, title: e.target.value }))}
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
          onChange={(e) => setNewMethod((prev: any) => ({ ...prev, url: e.target.value }))}
          className="col-span-3"
        />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Add Method</Button>
    </DialogFooter>
  </form>
);

const Navbar = () => {
  const [newMethod, setNewMethod] = useState({ title: '', url: '' });
  const dispatch = useDispatch();
   const pathname = usePathname();
    const isNotesPage = pathname === '/notes';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addItem({
      title: newMethod.title,
      url: newMethod.url,
      icon: "👉",
      details: "",
    }));
    setNewMethod({ title: '', url: '' });
  };

  return (
    <nav className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-600/40 shadow-sm sticky w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
         {isNotesPage&& <SidebarTrigger />}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            Java Script
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${pathname === link.href ? 'text-blue-600 dark:text-blue-500 font-semibold' : 'text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Add Method Dialog */}
          {isNotesPage && <Dialog>
            <DialogTrigger asChild>
              <Button>Add Method</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Method</DialogTitle>
                <DialogDescription>
                  Add a new method to the sidebar. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <AddMethodForm newMethod={newMethod} setNewMethod={setNewMethod} onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>}
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-[200px] sm:w-[200px]">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold mb-6">Menu</SheetTitle>
                  <nav className="flex flex-col space-y-4 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-lg transition-colors duration-200 ${pathname === link.href ? 'text-blue-600 dark:text-blue-500 font-semibold' : 'text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500'}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="justify-start text-lg px-0">
                          Add Method
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add New Method</DialogTitle>
                          <DialogDescription>
                            Add a new method to the sidebar. Fill in the details below.
                          </DialogDescription>
                        </DialogHeader>
                        <AddMethodForm newMethod={newMethod} setNewMethod={setNewMethod} onSubmit={handleSubmit} />
                      </DialogContent>
                    </Dialog>
                  </nav>
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