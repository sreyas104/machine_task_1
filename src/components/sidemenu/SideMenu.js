import React from 'react';
import { Avatar, Menu } from 'antd';
import {
    DashboardOutlined,
    PieChartOutlined,
    AppstoreAddOutlined,
    QuestionCircleOutlined,
    CustomerServiceOutlined,
    RightOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import propic from '../../Assets/profilepic.jpg'
import './SideMenu.css';

const SideMenu = () => {
    return (
        <div className='sideMenuBar '>
            <div className='profile_section'>
                <Avatar size={100} src={propic} />
                <h5 className="user-name m-0">Ram Mohan <RightOutlined /></h5>
                <p className="user-email">ram.mohan@email.com</p>
            </div>

            <div className="side-menu">
                <Menu mode="vertical" theme="light">
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="perks" icon={<PieChartOutlined />}>
                        Perks
                    </Menu.Item>
                    <Menu.Item key="addons" icon={<AppstoreAddOutlined />}>
                        Addons
                    </Menu.Item>
                    <Menu.Item key="faq" icon={<QuestionCircleOutlined />}>
                        FAQ
                    </Menu.Item>
                    <Menu.Item key="support" icon={<CustomerServiceOutlined />}>
                        Support
                    </Menu.Item>
                </Menu>
            </div>

        </div>
    );
};

export default SideMenu;
