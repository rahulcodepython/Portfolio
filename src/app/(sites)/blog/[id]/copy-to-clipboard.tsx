"use client"
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const CopyToClipboard = () => {
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
    };

    return (
        <div className="w-full flex justify-end border-t border-gray-200 p-4 ">
            <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-700 text-left">Share this post</h3>
                <div className="flex space-x-4">
                    <div className="w-10 h-10 cursor-pointer rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition" onClick={() => copyToClipboard()}>
                        <Facebook className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 cursor-pointer rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition" onClick={() => copyToClipboard()}>
                        <Twitter className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 cursor-pointer rounded-full bg-gray-700 dark:bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition" onClick={() => copyToClipboard()}>
                        <Linkedin className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyToClipboard