
import {login} from '../api/index'
import {store} from './index'
import actions from './actions'

//定义异步登录方法

function LoginAction(data,callback){
    // var navigate = useNavigate();
    //返回一个promise对象
    return new Promise((resolve,reject)=>{
        login(data)
        .then(res=>{
            if(res.data.code===200){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',JSON.stringify(res.data.user));
                //原生方法
                store.dispatch(actions.setUser(res.data.user));
                // navigate('/admin')
                //返回成功数据
                resolve(res.data);
            }else{
                alert(res.data.msg);
                reject(res.data);
            }
    })
    .catch(err=>{
        console.log(err);
    })
    })
}
export {LoginAction}