"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SocialIcons = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="fixed bottom-0 w-full z-40">
            <Dock direction="middle">
                <DockIcon>
                    <Link href={Icons.gitHubLink()} target="_blank" rel="noreferrer">
                        <Icons.gitHub />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href={Icons.linkedInLink()} target="_blank" rel="noreferrer">
                        <Icons.linkedIn />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href={Icons.twitterLink()} target="_blank" rel="noreferrer">
                        <Icons.twitter />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href={Icons.facebookLink()} target="_blank" rel="noreferrer">
                        <Icons.facebook />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href={Icons.instagramLink()} target="_blank" rel="noreferrer">
                        <Icons.instagram />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href={Icons.leetCodeLink()} target="_blank" rel="noreferrer">
                        <Icons.leetCode />
                    </Link>
                </DockIcon>
                <DockIcon>
                    {
                        mounted && theme === "dark" ? (
                            <Sun size={20} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
                        ) : (
                            <Moon size={20} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
                        )
                    }
                </DockIcon>
            </Dock>
        </section>
    );
}

const Icons = {
    gitHubLink: () => "https://github.com/rahulcodepython",
    gitHub: () => (
        <Image src="/dock-icon/github.png" alt="GitHub" width={26} height={26} />
    ),
    linkedInLink: () => "https://www.linkedin.com/in/rahulcodepython/",
    linkedIn: () => (
        <Image src="/dock-icon/linkedin.svg" alt="LinkedIn" width={24} height={24} />
    ),
    twitterLink: () => "https://twitter.com/rahulcodepython",
    twitter: () => (
        <Image src="/dock-icon/twitter.svg" alt="Twitter" width={24} height={24} />
    ),
    facebookLink: () => "https://www.facebook.com/rahulcodepython/",
    facebook: () => (
        <Image src="/dock-icon/facebook.svg" alt="Facebook" width={24} height={24} />
    ),
    instagramLink: () => "https://www.instagram.com/rahulcodepython/",
    instagram: () => (
        <Image src="/dock-icon/instagram.svg" alt="Instagram" width={24} height={24} />
    ),
    leetCodeLink: () => "https://leetcode.com/u/rahulcodepython/",
    leetCode: () => (
        <Image src="/dock-icon/leetcode.svg" alt="LeetCode" width={24} height={24} />
    ),
};

export default SocialIcons;