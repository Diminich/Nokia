import React from "react";
import style from './InnovationNewsBlog.module.scss'

import Innovation from "../homePage/innovation/Innovation";
import News from "../homePage/news/News";
import Blog from "../homePage/blog/Blog";

const InnovationNewsBlog = () => {
    return (
        <div className={style.wrapperInnovationNewsBlog}>
            <div className={style.innovationNewsBlog}>
                <Innovation />
                <News />
                <Blog />
            </div>
        </div>
    )
}

export default InnovationNewsBlog;