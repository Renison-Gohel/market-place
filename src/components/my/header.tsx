'use client'

import { useState } from 'react'
import { Search, Bell, MessageSquare, User, Menu, LogIn, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from './mode-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              className=" h-8 w-8 text-primary"
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
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
              <path d="M12 3v6" />
            </svg>
          </div>

          {/* Search Box - Hidden on mobile */}
          <div className="hidden md:block flex-grow mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8 w-full max-w-sm" />
            </div>
          </div>

          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/auth/signin">
                  <DropdownMenuItem>
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/auth/signup">
                  <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Signup</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
            <Button>Action</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 w-full" />
          </div>
        </div>

        {/* Mobile Menu - Visible only on mobile when menu is open */}
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="justify-start">
                <MessageSquare className="h-5 w-5 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" className="justify-start">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Button>
              <Button variant="ghost" className="justify-start">
                <UserPlus className="h-5 w-5 mr-2" />
                Signup
              </Button>
              <div className="justify-start pl-2">
                <ModeToggle />
              </div>
              <Button className="justify-start">Action</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}