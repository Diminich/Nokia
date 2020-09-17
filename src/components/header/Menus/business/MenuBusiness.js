import React, {useState} from "react";
import styles from './MenuBusiness.module.scss';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const BusinessContact = () => {
    const [visible, isVisible] = useState(false)

    const handleMenuContactClick = (e) => {
        if (e.key === '3') {
            isVisible(false);
        }
    };

    const menuContact = (
        <Menu className={styles.wrapperBusinessItem} onClick={handleMenuContactClick}>
            <Menu.Item className={styles.businessItem} key="1">Сети</Menu.Item>
            <Menu.Item className={styles.businessItem} key="2">Solutions for industry and public sector</Menu.Item>
            <Menu.Item className={styles.businessItem} key="3">Телефоны для бизнеса</Menu.Item>
            <Menu.Item className={styles.businessItem} key="3">Licensing opportunities</Menu.Item>
            <Menu.Item className={styles.businessItem} key="3">Brand licensing</Menu.Item>
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
                Для бизнеса <DownOutlined/>
            </a>
        </Dropdown>
    )

}

export default BusinessContact;