"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeClosed, Loader2, Lock, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (username && password) {
            setLoading(true);
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                    cache: 'reload'
                })

                if (!response.ok) {
                    const errorData = await response.json();
                    toast.error(errorData.error || 'Login failed');
                    return;
                }

                const data = await response.json();
                toast.success(data.msg);
                router.push('/dashboard');
            } finally {
                setLoading(false);
            }
        } else {
            toast('Please fill in all fields');
        }
    };

    return (
        <main className='flex items-center justify-center min-h-screen'>
            <section className="w-full max-w-md mx-4 bg-white dark:bg-bg-dark shadow-lg rounded-2xl overflow-hidden">
                <div className={`bg-white dark:bg-bg-dark rounded-2xl p-8`}>
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 flex items-center justify-center shadow-lg">
                            <User className="h-8 w-8 text-white" />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-1">Welcome Back</h1>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Please enter your credentials to login</p>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Username */}
                        <div className="mb-6">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    className="block w-full pl-10 pr-3 py-6 rounded-lg border border-gray-300 focus:border-sky-500 transition duration-200 text-gray-700 focus:ring-0"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="block w-full pl-10 pr-3 py-6 rounded-lg border border-gray-300 focus:border-sky-500 transition duration-200 text-gray-700 focus:ring-0"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <Eye className="h-4 w-4" />
                                    ) : (
                                        <EyeClosed className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r cursor-pointer from-sky-500 to-sky-600 text-white py-5 px-4 rounded-lg font-medium hover:from-sky-600 hover:to-sky-700 focus:outline-none focus:ring-0 focus:ring-sky-500 focus:ring-opacity-50 transition duration-200 shadow-lg"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>

                </div>
            </section>
        </main>
    );
};

export default Login;