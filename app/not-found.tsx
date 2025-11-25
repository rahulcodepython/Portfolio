import { ArrowLeft, Home, Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="max-w-2xl w-full">
                {/* Terminal-style 404 */}
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-secondary border-b border-border px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex items-center gap-2 ml-2 text-muted-foreground">
                            <Terminal className="w-4 h-4" />
                            <span className="text-sm font-mono">terminal ~ /404</span>
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-8 font-mono">
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <span className="text-green-500">$</span>
                                <span className="text-muted-foreground">locate page</span>
                            </div>

                            <div className="pl-4 space-y-2">
                                <p className="text-red-500">Error: Page not found</p>
                                <p className="text-muted-foreground">
                                    bash: /404: No such file or directory
                                </p>
                            </div>

                            <div className="flex items-start gap-2 mt-6">
                                <span className="text-green-500">$</span>
                                <span className="text-muted-foreground">status --verbose</span>
                            </div>

                            <div className="pl-4 space-y-2">
                                <div className="grid grid-cols-[120px_1fr] gap-4 text-sm">
                                    <span className="text-purple-400">Status Code:</span>
                                    <span className="text-foreground">404</span>

                                    <span className="text-purple-400">Error Type:</span>
                                    <span className="text-foreground">NOT_FOUND</span>

                                    <span className="text-purple-400">Message:</span>
                                    <span className="text-foreground">
                                        The page you're looking for doesn't exist in this directory.
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 mt-8">
                                <span className="text-green-500">$</span>
                                <span className="text-muted-foreground">suggest --solutions</span>
                            </div>

                            <div className="pl-4">
                                <div className="bg-secondary/50 border border-border rounded-lg p-4 space-y-3">
                                    <p className="text-blue-400 text-sm">Available commands:</p>

                                    <Link
                                        href="/"
                                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                                    >
                                        <Home className="w-4 h-4" />
                                        <span className="group-hover:underline">
                                            cd ~ <span className="text-muted-foreground ml-2"># Return to homepage</span>
                                        </span>
                                    </Link>

                                    <Link
                                        href="/"
                                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        <span className="group-hover:underline">
                                            cd .. <span className="text-muted-foreground ml-2"># Go back</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 mt-6">
                                <span className="text-green-500 animate-pulse">▋</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 404 Visual */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-4 text-8xl font-bold font-mono">
                        <span className="text-primary animate-pulse">4</span>
                        <span className="text-purple-500">0</span>
                        <span className="text-primary animate-pulse" style={{ animationDelay: "0.5s" }}>4</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
