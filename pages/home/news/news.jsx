"use client";

import { useEffect, useState } from "react"
import { bloglist } from "../../../src/components/base/JS/blog-list"

export function HomeNews() {

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        setBlogList(bloglist)
    }, [])

    return (
        <div className="home-news-main-wrap">
            <div className="home-news-small-heading">
                LATEST NEWS
            </div>
            <div className="home-news-big-heading">
                New Fashion Trends
            </div>
            <div className="blog-container">
                {blogList.slice(0, 3)
                    .map((blog, index) => (
                        <div className="blog-card" key={index}>
                            <img src={blog.blogImg} alt="" className="blogImg" />
                            <div className="blog-card-contents">
                                <div className="blog-date">
                                    <img src='/images/icon/calendar.png' alt="" style={{marginRight: '0.6rem'}}/>{blog.blogDate}
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
    )
}