import { useRoutes } from 'react-router-dom';
import Login from '../views/user/Login';
import Admin from '../views/admin/Admin';
import Dash from '../views/admin/Dash';
import Private from '../views/Private';
import OrderList from '../views/admin/order/OrderList';
import OrderDetail from '../views/admin/order/OrderDetail';
import Rich from '../views/admin/Rich';
import Style from '../views/admin/Style';
import Maptest from '../views/admin/Maptest';

//配置路由
function RouterView() {
    const routes = useRoutes([
        { path: '/', element: <Login /> },

        { path: '/login', element: <Login /> },

        {
            path: '/admin', element: <Private><Admin></Admin></Private>,
            children: [
                { path: 'rich', element: <Rich /> },
                { path: 'dash', element: <Dash></Dash> },
                { path: 'style', element: <Style></Style> },
                { path: 'maptest', element: <Maptest></Maptest> },
                { path: 'orderlist', element: <OrderList></OrderList> },
                { path: 'orderdetail/:id', element: <OrderDetail></OrderDetail> },
            ]
        },
    ])
    return (
        <>{routes}</>
    );
}

export default RouterView;