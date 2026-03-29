import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Bell, Shield, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">System Settings</h1>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">

                    <div className="p-8 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl mr-6"><Moon className="text-accent" size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dark Mode</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">Easier on the eyes, great for bedtime use.</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                        >
                            <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition duration-300 ${isDarkMode ? 'translate-x-9' : 'translate-x-1'}`} />
                        </button>
                    </div>

                    <div className="p-8 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl mr-6"><Bell className="text-secondary" size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Push Notifications</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">Receive AMA alerts & updates on this device.</p>
                            </div>
                        </div>
                        <button className="relative inline-flex h-8 w-16 items-center rounded-full bg-primary transition-colors duration-300 cursor-pointer">
                            <span className="inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition duration-300 translate-x-9" />
                        </button>
                    </div>

                    {currentUser && (
                        <div className="p-8 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl mr-6"><LogOut className="text-gray-500" size={24} /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Log Out</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mt-1">Sign out of the MEDQORIN platform.</p>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-bold transition">
                                Log out
                            </button>
                        </div>
                    )}

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-red-100 dark:border-red-900/30 overflow-hidden">
                    <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl mr-6"><Shield className="text-red-500" size={24} /></div>
                            <div>
                                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">Danger Zone</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">Permanently delete your account and device history.</p>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-xl font-bold transition border border-red-200 dark:border-red-800/50">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
