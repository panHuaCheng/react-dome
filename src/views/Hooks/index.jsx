import React, { useState } from 'react';
import Layout from '../Layout';
// import { Provider, connect } from 'react-redux'
import { connect } from 'react-redux'
import store from '../../utils/store'

const { dispatch } = store;

const Com = (props) => {
    const [flag, setFlag] = useState(1111)
    // useEffect(() => {
    //     console.log(flag)
    // }, [])
    const onChang = () => {
        setFlag(222)
        dispatch({
            type: 'changeMessage',
            message: 'sb呵呵呵'
        })
    }
    return (
        <div>
            <Layout />
            <div>{flag}</div>
            <div>{props.message}</div>
            <button onClick={() => onChang()}>按鈕</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Com);