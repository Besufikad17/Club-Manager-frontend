import React, {Components} from 'react';
import Header from './Header';

class Login extends Components {
    render(){
        return(
            <div>
                <Header/>
                <h1>Login</h1>
            </div>
        )
    }
}

export default Login;