import React from 'react';
import routes from '../../router/router.config';
// import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Layout = (props) => {

    const jump = (path) => {
        props.history.push(path)
    }

    return (
        <div>
            {
                routes.map((item, index) => (
                    // 第一种方法 不用withRouter
                    // <NavLink key={index} to={item.path} exact style={{ margin: '0 4px' }} onClick={() => jump()}>{item.name}</NavLink>
                    // 第二种方法 要用withRouter
                    <span key={index} style={{ margin: '0 4px', cursor: 'pointer', color: 'blue' }} onClick={() => jump(item.path)}>{item.name}</span>
                ))
            }

        </div>
    )
}

// export default Layout;
export default withRouter(Layout);