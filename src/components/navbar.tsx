"use client"
import { GitBranch, Home, IdCard, Mail, MenuIcon, Pen, Server, TableOfContents, User } from "lucide-react";
import Link from "next/link";
import React from 'react';

type NavLink = {
	href: string;
	icon: React.ElementType;
	label: string;
};


const Navbar = () => {
	const [menu, setmenu] = React.useState(false)

	const navlinks: NavLink[] = [
		{ href: "/#hero", icon: Home, label: "Home" },
		{ href: "/#about", icon: User, label: "About" },
		{ href: "/#services", icon: Server, label: "Services" },
		{ href: "/#projects", icon: IdCard, label: "Projects" },
		{ href: "https://github.com/rahulcodepython?tab=repositories", icon: GitBranch, label: "Repositories" },
		{ href: "/blogs", icon: TableOfContents, label: "Blog" },
		{ href: "/editor", icon: Pen, label: "Editor" },
		{ href: "/#contact", icon: Mail, label: "Contact" },
	];

	return (
		<header className="sticky top-0 bg-white/30 backdrop-blur-sm dark:bg-bg-dark/30 dark:backdrop-blur-sm z-50 shadow-2xl">
			<nav className="hidden lg:block py-2">
				<div className="flex justify-around items-center container mx-auto">
					{
						navlinks.map((item, index) => {
							const Icon = item.icon;
							return <Link href={item.href} key={index} className="flex gap-1 items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-black transition-colors duration-300 px-3 py-2 rounded-sm">
								<span className="mb-0.5">
									<Icon size={16} />
								</span>
								<span className="tracking-widest">
									{item.label}
								</span>
							</Link>
						})
					}
				</div>
			</nav>

			<nav className="flex justify-end mx-auto lg:hidden px-5 py-4">
				<button className="flex items-center justify-center text-2xl" onClick={() => setmenu((pre) => !pre)}>
					<MenuIcon />
				</button>
			</nav>

			<div className={`${menu ? 'sticky' : 'hidden'} lg:hidden w-full sticky top-12 border -mb-1 bg-white/30 backdrop-blur-sm dark:bg-primary dark:backdrop-blur-sm z-30 container mx-auto`}>
				{
					navlinks.map((item, index) => {
						const Icon = item.icon;
						return <Link href={item.href} key={index} onClick={() => setmenu(false)} className="flex gap-1 items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 px-3 py-2 rounded-sm">
							<span className="text-md mb-0.5">
								<Icon />
							</span>
							<span className="font-boldfont text-lg">
								{item.label}
							</span>
						</Link>
					})
				}
			</div>

		</header>
	)
}

export default Navbar