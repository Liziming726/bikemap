import request from "../utils/request";

export function login(data) {
    return request.post("/api/login",data)
}

//订单列表
export function getOrderList(){
    return request.get("/order/list")
}

//订单详情
export function getOrderDetail(){
    return request.get("/order/detail")
}