import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Package, Clock, ShieldCheck } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
    const { currentUser } = useAuth();

    if (!currentUser) return <Navigate to="/login" />;

    const mockOrders = [
        { id: 'ORD-1092', product: 'AMA Standard (Classic White)', date: 'Oct 23, 2026', status: 'Processing', total: '₹6,000' }
    ];

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Welcome back, {currentUser.displayName || currentUser.email.split('@')[0]}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Here is an overview of your account and paired AMA devices.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition">
                        <div className="bg-primary/10 text-primary p-4 rounded-xl mr-4"><Package size={28} /></div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Active Devices</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition">
                        <div className="bg-secondary/10 text-secondary p-4 rounded-xl mr-4"><Clock size={28} /></div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Next Scheduled Dose</p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">8:00 PM</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition">
                        <div className="bg-accent/10 text-accent p-4 rounded-xl mr-4"><ShieldCheck size={28} /></div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Security Status</p>
                            <p className="text-xl font-bold text-green-500">Secured</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm">
                                    <th className="pb-4 font-semibold">Order ID</th>
                                    <th className="pb-4 font-semibold">Product</th>
                                    <th className="pb-4 font-semibold">Date</th>
                                    <th className="pb-4 font-semibold">Status</th>
                                    <th className="pb-4 font-semibold">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-900 dark:text-gray-200">
                                {mockOrders.map(order => (
                                    <tr key={order.id} className="border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                                        <td className="py-5 font-semibold">{order.id}</td>
                                        <td className="py-5 text-gray-600 dark:text-gray-300">{order.product}</td>
                                        <td className="py-5 text-gray-500">{order.date}</td>
                                        <td className="py-5"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400 rounded-full text-xs font-bold">{order.status}</span></td>
                                        <td className="py-5 font-bold">{order.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
