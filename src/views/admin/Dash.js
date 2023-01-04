import { store, actions } from '../../store/index.js';
import { Button } from 'antd';
import { connect } from 'react-redux';

function Dash(props) {

    return (
        <>
            <Button onClick={() => store.dispatch(actions.add(1))}>+1</Button>

            <Button onClick={() => store.dispatch({ type: 'ADD', value: 5 })}>+5</Button>
        
            <p>
                <Button onClick={()=>props.add(2)}>{props.num}</Button>
            </p>

        </>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = actions;
//导出连接仓库的方法,可以访问组件中的props
export default connect(mapStateToProps,mapDispatchToProps)(Dash);