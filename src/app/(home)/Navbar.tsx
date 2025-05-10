"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const pathname = usePathname()

    const cartItemCount = 3

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Categories", href: "/categories" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Sale", href: "/sale" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors rounded px-2 py-1",
                                        pathname === link.href
                                            ? "bg-primary/10 text-primary"
                                            : "hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <div className="flex items-center ">
                    <Link href="/" className="mr-6  flex items-center space-x-2 line-clamp-2  max-w-100px">
                        <span className="text-xl font-bold">NEPACART</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-3 mx-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors px-2 py-1 rounded",
                                pathname === link.href
                                    ? "bg-primary/10 text-primary"
                                    : "hover:text-primary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    {/* Desktop Search */}
                    <div className="hidden md:flex relative w-full max-w-sm items-center">
                        <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search products..." className="w-full pl-8" />
                    </div>

                    {/* Mobile Search Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setShowSearch(!showSearch)}
                    >
                        {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                        <span className="sr-only">Toggle search</span>
                    </Button>

                    <Link
                        href={'/login'}
                        className={cn(
                            "text-sm font-medium transition-colors px-2 py-1 rounded",
                            pathname === '/login'
                                ? "bg-primary/10 text-primary"
                                : "hover:text-primary"
                        )}
                    >
                        {'Login'}
                    </Link>
                    <Link
                        href={'/signup'}
                        className={cn(
                            "text-sm font-medium transition-colors px-2 py-1 rounded",
                            pathname === '/signup'
                                ? "bg-primary/10 text-primary"
                                : "hover:text-primary"
                        )}
                    >
                        {'Signup'}
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                                <span className="sr-only">User menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link href="/account" className="w-full">My Account</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/orders" className="w-full">Orders</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/wishlist" className="w-full">Wishlist</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/logout" className="w-full">Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                  
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/cart" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                                    {cartItemCount}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Search (Expandable) */}
            {showSearch && (
                <div className="border-t p-4 md:hidden">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search products..." className="w-full pl-8" />
                    </div>
                </div>
            )}
        </header>
    )
}
