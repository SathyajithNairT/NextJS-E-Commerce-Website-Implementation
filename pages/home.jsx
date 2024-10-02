'use client';

import { HomeHero } from "./home/hero/hero"
import { HomeBanner } from "./home/banner/banner"
import { HomeInstagram } from "./home/instagram/instagram"
import { Products } from "./home/products/products"
import { HomeNews } from "./home/news/news"
import RootLayout from "@/app/layout"


export default function Home() {
    return (
        <RootLayout >
            <div className="home-main-wrap">
                <HomeHero />
                <HomeBanner />
                <Products />
                <HomeInstagram />
                <HomeNews />
            </div>
        </RootLayout>
    )
}