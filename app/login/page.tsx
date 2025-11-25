"use client";

import { Eye, EyeOff, Lock, Terminal, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: formData.username, password: formData.password }),
            })

            if (response.ok) {
                toast.success("Login functionality not implemented yet");
                router.push("/dashboard")
                router.refresh()
            } else {
                const data = await response.json()
                toast.error(data.error || "Invalid credentials")
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.")
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="max-w-md w-full relative z-10">
                {/* Terminal-style Login Card */}
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-secondary border-b border-border px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center gap-2 ml-2 text-muted-foreground">
                            <Terminal className="w-4 h-4" />
                            <span className="text-sm font-mono">auth ~ /login</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-lg mb-4">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <h1 className="text-2xl font-bold mb-2">
                                <span className="text-primary">$</span> System Login
                            </h1>
                            <p className="text-muted-foreground text-sm font-mono">
                                Enter your credentials to access the system
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Username Field */}
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium flex items-center gap-2">
                                    <span className="text-green-500 font-mono">$</span>
                                    <span>Username</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        id="username"
                                        type="text"
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono text-sm"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                                    <span className="text-green-500 font-mono">$</span>
                                    <span>Password</span>
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-10 pr-12 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono text-sm"
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5 cursor-pointer" />
                                        ) : (
                                            <Eye className="w-5 h-5 cursor-pointer" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                                        Authenticating...
                                    </span>
                                ) : (
                                    <span className="font-mono">$ sudo login</span>
                                )}
                            </button>
                        </form>

                        {/* Back to Home */}
                        <div className="mt-6 pt-6 border-t border-border text-center">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                            >
                                <span className="font-mono">cd ~</span>
                                <span>Back to home</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Terminal Command Line */}
                <div className="mt-4 px-4 py-2 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                        <span className="text-green-500">$</span>
                        <span className="animate-pulse">authentication_required</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
