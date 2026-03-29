import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, PackageCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Product() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [selectedStandardColor, setSelectedStandardColor] = useState('Classic White');
    const [selectedStandardComps, setSelectedStandardComps] = useState('14');

    const [cartMsg, setCartMsg] = useState('');

    const handleAddToCart = (productName, price) => {
        if (!currentUser) {
            navigate('/login');
            return;
        }
        setCartMsg(`Added ${productName} to your cart for ₹${price}!`);
        setTimeout(() => setCartMsg(''), 3000);
    };

    return (
        <div className="bg-background dark:bg-gray-900 min-h-screen py-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Choose Your AMA</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Find the perfect smart medicine allocator for your needs.</p>
                </div>

                {cartMsg && (
                    <div className="fixed top-24 right-4 bg-secondary text-white px-6 py-4 rounded-xl shadow-2xl flex items-center z-50 animate-bounce">
                        <PackageCheck className="mr-3" size={24} />
                        <span className="font-medium text-lg">{cartMsg}</span>
                    </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* AMA Standard */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-primary relative"
                    >
                        <div className="absolute top-0 right-0 bg-primary text-white px-6 py-1.5 rounded-bl-2xl font-bold text-sm">Best Seller</div>
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">AMA (Standard)</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">The complete automated medicine allocation system for home use.</p>
                            <div className="text-5xl font-extrabold text-primary mb-8">₹6,000</div>

                            <ul className="space-y-4 mb-8">
                                {["Automatic medicine allocation", "Timed dispensing with precise motors", "Loud smart alerts & LED indicators", "Caregiver monitoring app sync", "Secure child-proof access", "Large storage capacity (weeks)"].map((feat, i) => (
                                    <li key={i} className="flex items-start text-lg">
                                        <Check className="text-secondary mr-3 mt-1 flex-shrink-0" size={24} />
                                        <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4 mb-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-600">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Color Select</label>
                                    <select value={selectedStandardColor} onChange={e => setSelectedStandardColor(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                        <option>Classic White</option>
                                        <option>Medical Blue</option>
                                        <option>Sleek Black</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Compartments</label>
                                    <select value={selectedStandardComps} onChange={e => setSelectedStandardComps(e.target.value)} className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition">
                                        <option value="14">14 (2 weeks)</option>
                                        <option value="28">28 (1 month) +₹1000</option>
                                    </select>
                                </div>
                            </div>

                            <button onClick={() => handleAddToCart(`AMA Standard (${selectedStandardColor})`, selectedStandardComps === '28' ? 7000 : 6000)} className="w-full py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-xl flex justify-center items-center transition shadow-lg hover:shadow-xl">
                                <ShoppingCart className="mr-2" /> Add to Cart
                            </button>
                        </div>
                    </motion.div>

                    {/* AMA Mini */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 md:p-12 flex flex-col"
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">AMA Mini</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">The compact travel version for busy professionals and short trips.</p>
                        <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8">₹3,500 <span className="text-2xl font-medium text-gray-500 dark:text-gray-400">avg</span></div>

                        <ul className="space-y-4 mb-8">
                            {["Portable, lightweight design", "Travel-friendly and TSA approved", "Basic scheduling & buzzer alerts", "Compact 7-day storage layout", "Battery operated (USB-C rechargeable)"].map((feat, i) => (
                                <li key={i} className="flex items-start text-lg">
                                    <Check className="text-secondary mr-3 mt-1 flex-shrink-0" size={24} />
                                    <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8">
                            <button onClick={() => handleAddToCart('AMA Mini', 3500)} className="w-full py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-xl flex justify-center items-center transition">
                                <ShoppingCart className="mr-2" /> Add to Cart Mini
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
