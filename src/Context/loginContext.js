import React, { createContext, Component } from "react";

export const loginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        logged: true,
    };
    toggleLogin = () => {
        this.setState({ logged: !this.state.logged });
    };
    render() {
        return (
            <loginContext.Provider
                value={{ ...this.state, toggleLogin: this.toggleLogin }}
            >
                {this.props.children}
            </loginContext.Provider>
        );
    }
}

export default LoginContextProvider;
