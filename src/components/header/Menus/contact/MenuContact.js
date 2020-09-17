import React, {useState} from "react";
import styles from './MenuContact.module.scss';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const MenuContact = () => {
    const [visible, isVisible] = useState(false)

    const handleMenuContactClick = (e) => {
        if (e.key === '3') {
            isVisible(false);
        }
    };

    const menuContact = (
        <Menu className={styles.wrapperMenuItem} onClick={handleMenuContactClick}>
            <Menu.Item className={styles.menuItem} key="1">Телефоны</Menu.Item>
            <Menu.Item className={styles.menuItem} key="2">Nokia WiFi</Menu.Item>
            <Menu.Item className={styles.menuItem} key="3">Smart TVs</Menu.Item>
            <Menu.Item className={styles.menuItem} key="3">Audio</Menu.Item>
            <div className={styles.wrapperMenuButton}>
                <button className={styles.menuButtonItem}>Для клиентов</button>
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
                Для клиентов <DownOutlined/>
            </a>
        </Dropdown>
    )

}

export default MenuContact;