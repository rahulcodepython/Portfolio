"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import React from "react";
import Data from '@/data/data'

const SocialIcons = () => {
	return (
		<div className="fixed bottom-0 w-full z-40">
			<Dock direction="middle">
				{
					Data.socialicons.map((item, index) => {
						return <DockIcon key={index}>
							<a href={
								item[1]
							} target="_blank" rel="noreferrer">
								{item[0]}
							</a>
						</DockIcon>
					})
				}
			</Dock>
		</div>
	);
}

export default SocialIcons;