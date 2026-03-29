import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, HeartPulse } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand & About */}
                    <div>
                        <div className="flex items-center space-x-2 text-primary mb-4">
                            <HeartPulse size={28} />
                            <span className="text-2xl font-bold tracking-tight">MEDQORIN</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            MEDQORIN is a healthcare technology startup focused on improving medication safety through smart automation. The Automated Medicine Allocator (AMA) is designed to ensure patients take medicines correctly and on time while enabling monitoring and reducing risks.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">Home</a></li>
                            <li><a href="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">Our Products</a></li>
                            <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">About Us</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">Support</a></li>
                        </ul>
                    </div>

                    {/* Contact / Founder Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact / Founder Details</h3>
                        <div className="space-y-4">
                            <div className="font-medium text-gray-900 dark:text-gray-300 text-lg">SURYA S</div>
                            <a href="mailto:sundarajay26@gmail.com" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary transition">
                                <Mail size={18} />
                                <span>sundarajay26@gmail.com</span>
                            </a>
                            <a href="tel:+919043083844" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary transition">
                                <Phone size={18} />
                                <span>+91-9043083844</span>
                            </a>
                            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                                <MapPin size={18} />
                                <span>India</span>
                            </div>

                            <div className="flex space-x-4 pt-2">
                                <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={24} />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a href="https://github.com/suryacoder689" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <Github size={24} />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} MEDQORIN. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
