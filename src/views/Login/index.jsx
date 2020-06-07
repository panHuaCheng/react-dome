import React, { Component } from 'react';
import Layout from '../Layout';
// import { Provider, connect } from 'react-redux'
import { connect } from 'react-redux';
// import store from '../../utils/store'
import { bindActionCreators } from 'redux';

class Login extends Component {
    render() {
        return (
            <div>
                <Layout />
                <button onClick={()=>console.log('Login点我',this.props)}>Login点我</button>
                登录{this.props.message}
                <input type="button" value="修改仓库数据" onClick={() => {
                    // store.dispatch({
                    //     type: 'changeMessage',
                    //     message: 'sb呵呵呵'
                    // })
                    this.props.dispatchChangeMessage({
                        message: 'sb呵呵呵'
                    })
                }} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state
    }
}

// // 不使用bindActionCreators时候
// function mapDispatchToProps(dispatch) {
//     debugger
//     return {
//         dispatchChangeMessage: (payload) => dispatch({
//             type: 'changeMessage',
//             ...payload
//         })
//     };
// }

// // 使用bindActionCreators时候
// function mapDispatchToProps(dispatch) {
//     debugger
//     return {
//         dispatchChangeMessage: bindActionCreators((payload) => dispatch({
//             type: 'changeMessage',
//             ...payload
//         }), dispatch)
//     }
// }

// 使用bindActionCreators时候 (抽取actions)
let actions = {
    dispatchChangeMessage: (payload) => ({
        type: 'changeMessage',
        ...payload
    })
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);