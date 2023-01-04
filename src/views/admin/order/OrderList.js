import { useState,useEffect } from "react"; 
import { Table } from 'antd';
import {Link} from "react-router-dom";

import { getOrderList } from "../../../api/index"; //引入订单列表接口
function OrderList() {

    //定义订单列表
    const [orderList,setOrderList] = useState([]);
    //定义分页信息
    const [pagination,setPagination] = useState({});

    //模拟生命周期挂载，模拟接口数据
    useEffect(()=>{
        getOrderList().then(res=>{
            if(res.data.code === 0){
                //更新列表与分页
                setOrderList(res.data.list.item_list);
                setPagination(res.data.list.pagination);
            }
        })
        .catch(err=>{console.log(err);})
    },[])

    //表格的列
    const columns = [
        {
          title: '订单编号',
          dataIndex: 'order_sn',
          render: (text) => <Link to={'/admin/orderdetail/'+text}>{text}</Link>,
        },
        {
          title: '车辆编号',
          dataIndex: 'bike_sn',
        },
        {
          title: '用户名',
          dataIndex: 'user_name',
        },
        {
            title: '手机',
            dataIndex: 'mobile',
          },
          {
            title: '里程',
            dataIndex: 'distance',
          },
          {
            title: '行驶时长',
            dataIndex: 'total_time',
          },
          {
            title: '状态',
            dataIndex: 'status',
          },
          {
            title: '开始时间',
            dataIndex: 'start_time',
          },
          {
            title: '结束时间',
            dataIndex: 'end_time',
          },

      ];

      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };

    return ( 
        <div>
            <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={orderList}
      />
        </div>
     );
}

export default OrderList;