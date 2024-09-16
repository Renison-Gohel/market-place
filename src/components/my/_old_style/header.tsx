'use client'

import { useState } from 'react'
import { Search, Bell, MessageSquare, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from './mode-toggle'

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
            <Button variant="ghost" size="icon" className='hover:bg-primary'>
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className='hover:bg-primary'>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <ModeToggle/>
            <Button variant="ghost" size="icon" className='hover:bg-primary'>
              <User className="h-5 w-5" />
            </Button>
            <Button className='text-primary bg-secondary-foreground hover:bg-primary hover:text-secondary-foreground'>Action</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-primary bg-secondary-foreground hover:text-primary hover:bg-primary-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
              <Button variant="ghost" className="justify-start hover:bg-primary">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="justify-start">
                <MessageSquare className="h-5 w-5 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" className="justify-start">
                <User className="h-5 w-5 mr-2" />
                Profile
              </Button>
              <Button className="justify-start">Action</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}