

import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


export function Header() {

    const [hamIconClicked, setHamIconClicked] = useState(false)
    const [loading, setLoading] = useState('loading-screen-in')
    const [loadingState, setLoadingState] = useState(true)
    const router = useRouter()

    const isActive = (href) => {
        return router.pathname === href
    }

    const loadingScreen = () => {
        setLoading('loading-screen-in')
        setLoadingState(true)

        const timer = setTimeout(() => {
            
        }, 1000)

        setLoading('loading-screen-out')
        setLoadingState(false)

        return () => clearTimeout(timer)
    }

    const handleHamIconClick = () => {
        setHamIconClicked(!hamIconClicked)
    }


    useEffect(() => {
        setLoading('loading-screen-out')
        
        const timer = setTimeout(() => {
            setLoadingState(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])


    return (
        <div className="header-main-wrap">
            {loadingState && <div className={loading}></div>}
            <img src='/images/logo/logo.png' alt="" className='header-logo' />
            <div className='header-nav-wrap'>
                <Link href='/' passHref>
                    <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                        Home
                        {isActive('/') && <div className="header-nav-border-bottom"></div>}
                    </div>
                </Link>
                <Link href='/shop' passHref>
                    <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                        Shop
                        {isActive('/shop') && <div className="header-nav-border-bottom"></div>}
                    </div>
                </Link>
                <Link href="/blog" passHref>
                    <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                        Blog
                        {isActive('/blog') && <div className="header-nav-border-bottom"></div>}
                    </div>
                </Link>
                <Link href="/contact" passHref>
                    <div style={{ cursor: 'pointer' }} onClick={() => loadingScreen()}>
                        Contact Us
                        {isActive('/contact') && <div className="header-nav-border-bottom"></div>}
                    </div>
                </Link>
            </div>
            <div className='header-right-contents'>
                <div className='header-search' style={{ marginRight: '2.5rem' }}>
                    <FaSearch />
                </div>
                <div className='header-favourites' style={{ marginRight: '2.5rem' }}>
                    <FaRegHeart />
                </div>
                <div className='header-cart' style={{ display: 'flex', alignItems: 'center' }}>
                    <MdOutlineShoppingBag style={{ fontSize: '1.5rem', marginRight: '0.4rem' }} /><span>₹0.00</span>
                </div>
            </div>
            <div className='ham-icon'>
                <RxHamburgerMenu style={{ fontSize: '2rem' }} onClick={handleHamIconClick} />
            </div>


            <div className='ham-icon-draw' style={{ display: hamIconClicked ? 'block' : 'none' }}>
                <div className='ham-icon-draw-header'>
                    <div className='ham-icon-header-banner'>
                        <div>SIGN IN</div>
                        <div>FAQs</div>
                        <div>
                            <select name="" id="" className="banner-currency-select" style={{ color: 'black' }}>
                                <option value="">INR (₹)</option>
                                <option value="">USD ($)</option>
                                <option value="">EUR (€)</option>
                            </select>
                        </div>
                    </div>
                    <div className='header-right-contents ham-icon-draw-header-icons' style={{ display: 'flex' }}>
                        <div className='header-search' style={{ marginRight: '2.5rem' }}>
                            <FaSearch />
                        </div>
                        <div className='header-favourites' style={{ marginRight: '2.5rem' }}>
                            <FaRegHeart />
                        </div>
                        <div className='header-cart' style={{ display: 'flex', alignItems: 'center' }}>
                            <MdOutlineShoppingBag style={{ fontSize: '1.5rem', marginRight: '0.4rem' }} /><span>₹0.00</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <div className='header-nav-wrap ham-icon-draw-nav' style={{ display: 'flex' }}>
                        <Link href='/' passHref>
                            <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                                Home
                            </div>
                        </Link>
                        <Link href='/shop' passHref>
                            <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                                Shop
                            </div>
                        </Link>
                        <Link href="/blog" passHref>
                            <div style={{ marginRight: '2.5rem', cursor: 'pointer' }} onClick={() => loadingScreen()}>
                                Blog
                            </div>
                        </Link>
                        <Link href="/contact" passHref>
                            <div style={{ cursor: 'pointer' }} onClick={() => loadingScreen()}>
                                Contact Us
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="banner-left-contents ham-icon-draw-guarantee">
                    Free Shipping, 30-day return or refund guarantee.
                </div>
            </div>
        </div>
    )
}