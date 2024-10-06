


export default function HomeBanner() {
    return (
        <div className="home-banner-main-wrap">
            <div className="home-banner-clothing-collection">
                <img src='/images/banner/banner-1.jpg' alt="" className='homebannerimg' />
                <div className='home-banner-clothing-collection-contents'>
                    <div className='home-banner-heading'>
                        Clothing <span style={{ display: 'block' }}> Collections 2024</span>
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
            <div className="home-banner-accessories">
                <img src='/images/banner/banner-2.jpg' alt="" className='homebannerimg' />
                <div className='home-banner-accessories-contents'>
                    <div className='home-banner-heading'>
                        Accessories
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
            <div className="home-banner-shoes">
                <img src='/images/banner/banner-3.jpg' alt="" className='homebannerimg' />
                <div className='home-banner-shoes-contents'>
                    <div className='home-banner-heading'>
                        Shoe Spring <span style={{ display: 'block' }}>2024</span>
                    </div>
                    <div className='home-banner-btn'>
                        SHOP NOW
                        <div className='border-banner-btn'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}