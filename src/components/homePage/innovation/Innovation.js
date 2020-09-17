import React from "react";
import style from './Innovation.module.scss';
import img from './../../../icons/innov.jpg';

const Innovation = () => {
    return (
        <div className={style.wrapperInnovation}>
            <div className={style.wrapperInnovationImg}>
                <img src={img} className={style.innovationImg} />
            </div>
            <a className={style.linkInnovation}>Инновации</a>
            <span>Исследуйте постоянное сотрудничество в сфере инноваций в Nokia и за ее пределами</span>
        </div>
    )
}

export default Innovation;