import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, UserCircle, LogOut, HeartPulse } from 'lucide-react';

export default function Navbar() {
    const { currentUser, logout } = useAuth();
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2 text-primary">
                        <HeartPulse size={32} />
                        <span className="text-xl font-bold tracking-tight">MEDQORIN</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200">
                        <Link to="/" className="hover:text-primary transition">Home</Link>
                        <Link to="/products" className="hover:text-primary transition">Products</Link>

                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-sm">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {currentUser ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/dashboard" className="flex items-center hover:text-primary transition">
                                    <UserCircle size={24} className="mr-1" />
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="text-red-500 hover:text-red-600 transition flex items-center">
                                    <LogOut size={20} className="mr-1" /> Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link to="/login" className="px-4 py-2 flex items-center justify-center rounded-md font-medium text-primary hover:bg-primary/10 transition">Log in</Link>
                                <Link to="/signup" className="px-4 py-2 flex items-center justify-center rounded-md font-medium bg-primary text-white hover:bg-blue-600 transition shadow-md">Sign up</Link>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-300">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
