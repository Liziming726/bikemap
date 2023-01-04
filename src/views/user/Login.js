import React from 'react';
import { Button, Form, Input } from 'antd';
import { LoginAction, store } from '../../store/index.js';
//导入登录方法
import { login } from '../../api';


import { useNavigate, useSearchParams } from 'react-router-dom';

function Login() {
    //实现跳转功能
    var navigate = useNavigate();
    var [search] = useSearchParams();

    //验证成功，实现登录
    const onFinish = (values) => {
        // function callback() {
        //     var redirect = search.get('redirect') || '/admin';
        //     navigate(redirect);
        // }
        //使用异步登录
        //把callback传递给LoginAction
        LoginAction(values)
        .then(res => {
            var redirect = search.get('redirect') || '/admin';
            navigate(redirect);
        })
        // //使用登录
        // login(values)
        // .then(res => {
        //     console.log(res);
        //     //登录后处理
        //     if (res.data.code === 200) {
        //         //存储token
        //         localStorage.setItem('token', res.data.token);
        //         localStorage.setItem('user', JSON.stringify(res.data.user));
        //         //原生方法
        //         store.dispatch({type:'SET_USER',value:res.data.user});

        //         //跳转到首页
        //         var redirect = search.get('redirect') || '/admin';
        //         navigate(redirect);
        //     }
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // }
        // )
    };

    //验证失败
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login'>
            <h1 className='t1'>欢迎你来。</h1>
            <Form
                className='form'
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className='t2'>请登录</h2>
                <Form.Item
                    label="账号"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;