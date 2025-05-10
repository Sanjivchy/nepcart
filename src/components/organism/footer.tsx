import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, CreditCard, ShoppingCartIcon as Paypal } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100">
            <div className="container mx-auto px-4 py-12">
                {/* Top section with newsletter */}
                <div className="border-b border-gray-800 pb-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
                            <p className="text-gray-400 mb-4">Get the latest updates, sales and special offers</p>
                        </div>
                        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 border-gray-700 text-gray-100 min-w-[240px]"
                            />
                            <Button className="bg-white text-gray-900 hover:bg-gray-200">Subscribe</Button>
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h4 className="font-bold text-lg mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Sale
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Size Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Our Stores
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Corporate Responsibility
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Investors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social and payment methods */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Youtube className="w-5 h-5" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">Payment methods:</span>
                        <div className="flex gap-2">
                            <CreditCard className="w-8 h-5 text-gray-400" />
                            <Paypal className="w-8 h-5 text-gray-400" />
                        </div>
                    </div>

                    <div className="text-sm text-gray-400">© {new Date().getFullYear()} Your Store. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
