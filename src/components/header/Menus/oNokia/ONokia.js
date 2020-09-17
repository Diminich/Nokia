import React, {useState} from "react";
import styles from './ONokia.module.scss';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const ONokia = () => {
    const [visible, isVisible] = useState(false)

    const handleMenuContactClick = (e) => {
        if (e.key === '3') {
            isVisible(false);
        }
    };

    const menuContact = (
        <Menu className={styles.wrapperMenuONokiaItem} onClick={handleMenuContactClick}>
            <Menu.Item className={styles.menuONokiaItem} key="1">Новости & события</Menu.Item>
            <Menu.Item className={styles.menuONokiaItem} key="2">Sustainability</Menu.Item>
            <Menu.Item className={styles.menuONokiaItem} key="3">Иневестры</Menu.Item>
            <Menu.Item className={styles.menuONokiaItem} key="3">Карьера</Menu.Item>
            <Menu.Item className={styles.menuONokiaItem} key="3">Government relations</Menu.Item>
            <div className={styles.wrapperMenuONokiaItemButton}>
                <button className={styles.menuONokiaButtonItem}>О Nokia</button>
            </div>
        </Menu>
    );

    const handleVisibleChange = (flag) => {
        isVisible(flag);
    };

    return (
        <Dropdown
            overlay={menuContact}
            onVisibleChange={handleVisibleChange}
            visible={visible}
        >
            <a className={styles.textContact} onClick={e => e.preventDefault()}>
                О Nokia <DownOutlined/>
            </a>
        </Dropdown>
    )

}

export default ONokia;