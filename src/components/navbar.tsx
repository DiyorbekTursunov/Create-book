import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png'
import notifications_Icon from './images/icons/notifications_Icon.png'

import search_icon_light from './images/icons/search_icon_light.svg'
import search_icon_dark from './images/icons/search_icon_dark.svg'
import close_icon from './images/icons/close_icon.svg'

import user_image from './images/users/user-image.png'
import { useState } from 'react'

export default function Navbar() {
    const [inputValue, setinputValue] = useState<string>("")
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <nav className='container mx-auto py-3 flex justify-between'>
            <div className='flex items-center gap-6'>
                <Link to={"/"}>
                    <img src={logo} alt="site logo" />
                </Link>
                {/* <img src={search_refraction} alt="search icon" className='absolute' /> */}
                <div className={`flex items-center gap-3 px-7 rounded-[6px] ${isFocused ? "bg-white" : "bg-transparent"} relative`}>
                    <img src={isFocused ? search_icon_dark : search_icon_light} alt='search_icon' className='cursor-pointer' />
                    <input
                        type="text"
                        className='bg-transparent outline-none text-[#f2f2f2] focus:text-[#000] pl-2 py-[15px]'
                        placeholder='Search for any training you want'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={inputValue}
                        onChange={(e) => setinputValue(e.target.value)}
                    />
                    {isFocused && <button onClick={() => console.log(1)}><img src={close_icon} alt='close_icon' /></button>}
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <button>
                    <img src={notifications_Icon} alt="notifications_Icon" />
                </button>
                <button>
                    <img src={user_image} alt="user image" />
                </button>
            </div>
        </nav>
    )
}