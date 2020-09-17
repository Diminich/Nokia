import React from "react";
import style from './Blog.module.scss';
import img from './../../../icons/blog.jpg';

const Blog = () => {
    return (
        <div className={style.wrapperBlog}>
            <div className={style.wrapperBlogImg}>
                <img src={img} className={style.blogImg} />
            </div>
            <a className={style.linkBlog}>Блог</a>
            <span>Участвуйте в дискуссии</span>
        </div>
    )
}

export default Blog;