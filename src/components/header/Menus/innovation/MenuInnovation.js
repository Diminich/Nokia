import React, {useState} from "react";
import styles from './MenuInnovation.module.scss';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const MenuInnovation = () => {
    const [visible, isVisible] = useState(false)

    const handleMenuContactClick = (e) => {
        if (e.key === '3') {
            isVisible(false);
        }
    };

    const menuContact = (
        <Menu className={styles.wrapperMenuInnovationItem} onClick={handleMenuContactClick}>
            <Menu.Item className={styles.menuInnovationItem} key="1">Innovation platform</Menu.Item>
            <Menu.Item className={styles.menuInnovationItem} key="2">NGP Capital</Menu.Item>
            <Menu.Item className={styles.menuInnovationItem} key="3">Nokia Bell Labs</Menu.Item>
            <Menu.Item className={styles.menuInnovationItem} key="3">Open innovation ecosystem</Menu.Item>
            <div className={styles.wrapperMenuInnovationItemButton}>
                <button className={styles.menuInnovationButtonItem}>Инновации</button>
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
                Инновации <DownOutlined/>
            </a>
        </Dropdown>
    )

}

export default MenuInnovation;