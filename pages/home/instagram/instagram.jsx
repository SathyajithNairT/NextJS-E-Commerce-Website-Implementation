


export function HomeInstagram(){
    return(
        <div className="home-instagram-main-wrap">
            <div className='home-instagram-image-container'>
                <img src='/images/instagram/instagram-1.jpg' alt="" />
                <img src='/images/instagram/instagram-2.jpg' alt="" />
                <img src='/images/instagram/instagram-3.jpg' alt="" />
                <img src='/images/instagram/instagram-4.jpg' alt="" />
                <img src='/images/instagram/instagram-5.jpg' alt="" />
                <img src='/images/instagram/instagram-6.jpg' alt="" />
            </div>
            <div className='home-instagram-contents'>
                <div style={{fontSize: '2.5rem', fontWeight: '600', marginBottom: '2rem'}}>Instagram</div>
                <div style={{color: 'gray'}}>Check out our instagram to know about the latest trends, offers and arrivals.</div>
                <div style={{color: 'red', fontSize: '2rem', fontWeight: '600', marginTop: '4rem'}}>#Male_Fashion</div>
            </div>
        </div>
    )
}