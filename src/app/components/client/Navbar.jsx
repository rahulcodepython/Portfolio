"use client"
import { BiMenu } from "@/data/icons";
import React from 'react'
import Link from "next/link";
import Data from "@/data/data";

const Navbar = () => {
	const [menu, setmenu] = React.useState(false)
	return (
		<>
			<nav className="bg-white/30 backdrop-blur-sm dark:bg-black/30 dark:backdrop-blur-sm hidden lg:block sticky top-0 py-2 shadow-2xl z-30">
				<div className="flex justify-around items-center">
					{
						Data.navlinks.map((item, index) => {
							return <Link href={item[0]} key={index} className="nav-button flex gap-1 items-center justify-center">
								<span className="text-lg mb-0.5">
									{item[1]}
								</span>
								<span className="font-boldfont text-lg tracking-widest">
									{item[2]}
								</span>
							</Link>
						})
					}
				</div>
			</nav>

			<nav className="bg-white/30 backdrop-blur-sm dark:bg-black/30 dark:backdrop-blur-sm flex justify-end mx-auto lg:hidden sticky top-0 px-5 py-4 shadow-2xl z-30">
				<button className="flex items-center justify-center text-2xl" onClick={() => setmenu((pre) => !pre)}>
					<BiMenu />
				</button>
			</nav>
			<div className={`${menu ? 'sticky' : 'hidden'} lg:hidden w-full sticky top-12 border -mb-1 bg-white/30 backdrop-blur-sm dark:bg-black/30 dark:backdrop-blur-sm  z-30`}>
				<div className="flex flex-col">
					{
						Data.navlinks.map((item, index) => {
							return <Link href={item[0]} key={index} onClick={(e) => { setmenu(false) }} className="nav-button flex gap-1 items-center">
								<span className="text-md mb-0.5">
									{item[1]}
								</span>
								<span className="font-boldfont text-lg">
									{item[2]}
								</span>
							</Link>
						})
					}
				</div>
			</div>

		</>
	)
}

export default Navbar