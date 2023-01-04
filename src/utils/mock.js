var Mock = require('mockjs');
Mock.mock('/getMenu',[
    {title:'首页',key:'/admin/home',icon:'UserOutlined'},
    {title:'UI',key:'/admin/ui',icon:'HeaderOutlined',children:[
        {title:'基础',key:'/admin/ui/base'},
        {title:'按钮',key:'/admin/ui/buttons'},
    ]},
    {title:'城市管理',key:'/admin/city',icon:'UserOutlined'},
    {title:'订单管理',key:'/admin/orderlist',icon:'UserOutlined'},
    {title:'评论',key:'/admin/com',icon:'UserOutlined'},
])

Mock.mock( /\order\/list/,{
    "code": 0,
    list:{
        pagination:{
            "current|1-5":1,
            "pageSize":10,
            "total":120,
            "page_count":9,
        },
        "item_list|10":[{
            "id":2959165,
            "key|100-500":1,
            "order_sn":/T180[0-9]{6}/,
            "bike_sn":"800116090",
            "user_id":908352,
            "user_name":"@cname",
            "mobile":/1[0-9]{10}/,
            "distance":2000,
            "total_time":4000,
            "status|1-2":1,
            "start_time":"@datetime",
            "end_time":"@datetime",
            "total_fee":1000,
            "user_pay":300,
        }]
    }
})

Mock.mock( /\order\/detail/g,{
    "code": 0,
    "msg": "",
    "list": {
        "status": 2,
        "order_sn": "T1803244422704080JGJI",
        "bike_sn": "802410001",
        "mode|1-2": 1,
        "start_location":'北京市昌平区回龙观东大街',
        "end_location":'北京市海淀区奥林匹克公园',
        "city_id": 1,
        "mobile": "13612341234",
        "user_name": "@cname",
        "distance": 1000,
        "bike_gps":'116.398806,40.008637',
        "start_time": 1521865027000,
        "end_time": 1521865027000,
        "total_time": 224,
        "position_list": [
            {"lng":116.402544,"lat":39.928216},
            {"lng":116.363736,"lat":40.007078},
            {"lng":116.363736,"lat":40.036486},
            {"lng":116.363736,"lat":40.036484},
            {"lng":116.363736,"lat":40.035384},
            {"lng":116.363736,"lat":40.035384},
            {"lng":116.379762,"lat":40.03654},
            {"lng":116.38084,"lat":40.033225},
            {"lng":116.381343,"lat":40.029413},
            {"lng":116.381346,"lat":40.021291},
            {"lng":116.381846,"lat":40.015821},
            {"lng":116.382637,"lat":40.008084},
        ],
        "area":[{
            "lng":116.402544,
            "lat":39.928216,
            "ts":null
        },{
            "lng":116.363736,
            "lat":40.007078,
            "ts":null
        },{
            "lng":116.363736,
            "lat":40.036486,
            "ts":null
        },{
            "lng":116.363736,
            "lat":40.036484,
            "ts":null
        },{
            "lng":116.363736,
            "lat":40.035384,
            "ts":null
        },{
            "lng":116.363736,
            "lat":40.035384,
            "ts":null
        },{
            "lng":116.379762,
            "lat":40.03654,
            "ts":null
        },{
            "lng":116.38084,
            "lat":40.033225,
            "ts":null
        },{
            "lng":116.381343,
            "lat":40.029413,
            "ts":null
        },{
            "lng":116.381346,
            "lat":40.021291,
            "ts":null
        },{
            "lng":116.381846,
            "lat":40.015821,
            "ts":null
        },{
            "lng":116.382637,
            "lat":40.008084,
            "ts":null
        }],
        "area_list": null,
        "npl_list":[{
            "id":8265,
            "name":"北京市海淀区奥林匹克公园",
            "city_id":1,
            "type":3,
            "status":0,
            "map_point":"116.398806,40.008637",
            "map_point_array":[116.398806,40.008637],
            "map_status":1,
            "creator_name":"admin",
            "create_time":1521865027000,
        }]
    },
})
//导出
export default Mock;