//导入redux仓库
import { store, actions } from '../../store/index';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import {
    DesktopOutlined,
    CarOutlined,
    PieChartOutlined,
    CreditCardOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
//导入的是布局
import { Outlet, useNavigate } from 'react-router-dom';
//通过布局解析组件
const { Header, Footer, Sider, Content } = Layout;

function Admin(props) {

    //获取仓库中的数据
    const [count, setCount] = useState(store.getState().num);
    //更新仓库变换
    store.subscribe(() => {
        setCount(store.getState().num);
    });

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('状态管理', 'dash', <PieChartOutlined />),
        getItem('订单', 'orderlist', <DesktopOutlined />),
        getItem('富文本', 'rich', <CreditCardOutlined />),
        getItem('样式', 'style', <UserOutlined />),
        getItem('地图', 'maptest', <CarOutlined />),
    ];
    const [collapsed, setCollapsed] = useState(false);

    //实现导航功能
    const navigate = useNavigate();
    const menuClick = e => {
        console.log(e);
        var pathname = '/admin/' + e.keyPath.reverse().join("/");
        navigate(pathname);
    };


    return (
        <Layout style={{ height: '100vh' }}>
            <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: '#ddd', borderRadius: 5, }} />
                <Menu onClick={menuClick} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ background: "#fff" ,display:'flex'}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    {/* <Button type="">{count}</Button> */}
                    {/* 通过props拿到用户信息，num dnum */}
                    <p>{props.num} | {props.dnum} | </p>
                    <p>{props.user.name} | </p>
                    <p><img src={props.user.avatar} alt="" width="100"/></p>
                    <p>{props.user.score} | </p>

                </Header>
                <Content style={{ margin: '16px', backgroundColor: '#fff' }}><Outlet /></Content>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = (state) => ({ ...state, dnum: state.num * 2 });
const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Admin);