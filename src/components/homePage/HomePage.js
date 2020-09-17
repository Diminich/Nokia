import React from 'react';
import style from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={style.wrapperHomePage}>
            <div className={style.images}>
                <div className={style.wrapperNewPhone}>
                    <div className={style.newPhone}>
                        <span className={style.textPhone}>Познакомтесь с новыми мобильными телефонами</span>
                        <button className={style.buttonPhone}>Узнать больше</button>
                    </div>
                </div>
                <div className={style.wrapperNetworkedTechnological}>
                    <div className={style.networkedTechnological}>
                        <span className={style.textNetworkedTechnological}>Получите подходящее сетевое или технологическое решение</span>
                        <button className={style.buttonNetworkedTechnological}>Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
