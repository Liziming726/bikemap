//创建store
import { createStore, applyMiddleware} from 'redux'
//导入异步处理中间件
import thunk from 'redux-thunk'
import actions from '../store/actions.js';
import { LoginAction } from '../store/actionSync.js';

// import { useNavigate } from 'react-router-dom';

var initState = {
    num: 5,user:{}
}

//数据处理器reducer
function reducer(state=initState,action){
    switch(action.type){
        //如果动作的参数是add,则返回num的值加上action.value
        case 'ADD':
            return {...state,num:state.num+action.value}
        case 'SET_USER':
            return {...state,user:action.value}
        default:
            return state
    }
}
//创建store
const store = createStore(reducer,applyMiddleware(thunk))

//导出store和动作
export {store,actions,LoginAction}

