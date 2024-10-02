"use client";

import { useEffect, useState } from 'react'
import { bloglist } from '@/components/base/JS/blog-list';
import RootLayout from '@/app/layout';


export default function Blog() {

    const [blogItems, setBlogItems] = useState([])

    useEffect(() => {
        setBlogItems(bloglist)
    }, [])

    return (
        <RootLayout>
            <div className="blog-main-wrap">
                <div className="breadcrumbs-wrap">
                    <img src='images/breadcrumb-bg.jpg' alt="" />
                    <div className='blog-heading'>
                        Our Blog
                    </div>
                </div>
                <div className='blog-contents-wrap'>
                    <div className='blog-contents-container'>
                        {blogItems.map((blog, index) => (
                            <div className="blog-card" key={index} style={{ marginBottom: '10rem' }}>
                                <img src={blog.blogImg} alt="" className="blogImg" />
                                <div className="blog-card-contents">
                                    <div className="blog-date">
                                        <img src='/images/icon/calendar.png' alt="" style={{ marginRight: '0.6rem' }} />{blog.blogDate}
                                    </div>
                                    <div className="blog-title">
                                        {blog.blogTitle}
                                    </div>
                                    <div className="blog-read-more-btn">
                                        READ MORE
                                        <div className="blog-read-more-btn-border-bottom"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}