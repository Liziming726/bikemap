import React from 'react';
import { Divider } from 'antd';
import '@/assets/base.scss'
import '@/assets/layout.module.scss'
import layout from '../../assets/layout.module.scss'
function Style() {
    return ( 
        <>
        <div className="header">
            header <span className='active'>激活active</span>
        </div>
        <Divider>模块化css</Divider>
        <div className={layout["header"]}>
            body <span className={layout["active"]}>激活active</span>
        </div>
        </>
     );
}

export default Style;