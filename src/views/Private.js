import { useLocation,Navigate } from "react-router-dom";

export default function Private(props) {

    var token = localStorage.getItem("token");

    var location = useLocation();

    if (token) {
        return <>{props.children}</>
    }else{
        return <Navigate to={{'pathname':'/login',search:'?redirect='+location.pathname}}/>
    }
}