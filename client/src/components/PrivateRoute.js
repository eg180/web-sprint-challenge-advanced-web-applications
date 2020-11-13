import React from "react";
import { Route, Redirect } from "react-router-dom";

// this is just a Function Component with props passed in!

const PrivateRoute = ({component:Component, ...rest}) => {
    return (<Route
        {...rest}
        render={(props) => {
            if (localStorage.getItem("token")) {
                return <Component {...props} />;
            } else {
                return <Redirect to="/" />;
            }
        }}

    />)
}

export default PrivateRoute;