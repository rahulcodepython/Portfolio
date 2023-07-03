import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub, BiLogoTwitter, BiLogoDiscordAlt } from 'react-icons/bi';
import React from 'react'

const SocialIcons = () => {
    return (
        <p className='text-white font-bold text-2xl md:text-3xl mt-7 flex items-center gap-5 cursor-pointer absolute right-5'>
            <BiLogoFacebook className='hover:text-blue-500 transition-colors ease-in-out duration-100' />
            <BiLogoInstagramAlt className='hover:text-pink-500 transition-colors ease-in-out duration-100' />
            <BiLogoLinkedin className='hover:text-blue-500 transition-colors ease-in-out duration-100' />
            <BiLogoGithub className='hover:text-black transition-colors ease-in-out duration-100' />
            <BiLogoTwitter className='hover:text-sky-400 transition-colors ease-in-out duration-100' />
            <BiLogoDiscordAlt className='hover:text-indigo-500 transition-colors ease-in-out duration-100' />
        </p>
    )
}

export default SocialIcons