import { Map, Marker, NavigationControl, Polyline,Polygon, MapApiLoaderHOC } from 'react-bmapgl';
//地图 标记 导航控制 信息窗口
import React, { useState, useEffect } from 'react';
//使用状态与副作用
import { getOrderDetail } from '../../../api/index';

function OrderDetail() {

var [list, setList] = useState({});
//使用状态
useEffect(() => {
    getOrderDetail()
    .then(res => {
        if (res.data.code === 0) {
            setList(res.data.list)
        }
    })
    .catch(err => {console.log(err)})
}, [])
return (
    <div>
        {list.order_sn && <Map style={{height:'600px'}} enableScrollWheelZoom="ture" center={{ lng: list.position_list[Math.ceil(list.position_list.length/2)].lng, lat: list.position_list[Math.ceil(list.position_list.length/2)].lat }} zoom="13">
            <Marker position={{ lng: list.position_list[0].lng, lat: list.position_list[0].lat }} />
            <Marker position={{ lng: list.position_list[list.position_list.length-1].lng, lat: list.position_list[list.position_list.length-1].lat }} />
            <Polyline
          path={[list.position_list]}
          strokeColor="#f00"
          strokeWeight={2}
        />
         <Polygon
          path={[list.area]}
          strokeColor="#f00"
          strokeWeight={2}
          fillColor="#ff0"
          fillOpacity={0.1}
          onMouseover={e => {console.log(e)}}
        />
            <NavigationControl />
            {/* <InfoWindow position={{ lng: 116.402544, lat: 39.928216 }} text="内容" title="标题" /> */}
        </Map>}
    </div>
);
}

export default MapApiLoaderHOC({ak: 'KYLE8SLRG6c9csRwGd4XGHmVRUrQ8Cwn'})(OrderDetail);