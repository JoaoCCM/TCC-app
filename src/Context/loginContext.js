import React, { createContext, Component } from "react";

export const loginContext = createContext();

class LoginContextProvider extends Component {
    state = {
        logged: false,
    };
    setLogin = (isLogged) => {
        this.setState({ logged: isLogged });
    };
    toggleLogin = () => {
        this.setState({ logged: !this.state.logged });
    };
    render() {
        return (
            <loginContext.Provider
                value={{
                    ...this.state,
                    toggleLogin: this.toggleLogin,
                    setLogin: this.setLogin,
                }}
            >
                {this.props.children}
            </loginContext.Provider>
        );
    }
}

export default LoginContextProvider;
