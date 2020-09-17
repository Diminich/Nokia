import React from "react";
import style from './News.module.scss';
import img from './../../../icons/news.jpg';

const News = () => {
    return (
        <div className={style.wrapperNews}>
            <div className={style.wrapperNewsImg}>
                <img src={img} className={style.newsImg} />
            </div>
            <a className={style.linkNews}>Новости & события</a>
            <span>Прочитайте о последних новостях и событиях Nokia</span>
        </div>
    )
}

export default News;