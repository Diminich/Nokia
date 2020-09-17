import React from 'react';
import styles from './Header.module.scss';
import {GlobalOutlined, SearchOutlined, MenuFoldOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import MenuContact from "./Menus/contact/MenuContact";
import BusinessContact from "./Menus/business/MenuBusiness";
import MenuInnovation from "./Menus/innovation/MenuInnovation";
import ONokia from "./Menus/oNokia/ONokia";

const Header = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperIconNokia}>
                NOKIA
            </div>
            <div className={styles.wrapperMenu}>
                <MenuContact/>
                <BusinessContact/>
                <MenuInnovation/>
                <ONokia/>
            </div>
            <div className={styles.wrapperIcons}>
                <GlobalOutlined className={styles.iconPlanet}/>
                <SearchOutlined className={styles.iconMagnifier}/>
                <div className={styles.wrapperIconMenuSpan}>
                    <MenuFoldOutlined className={styles.iconMenu}/>
                    <span className={styles.spanMenu}>Menu</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
