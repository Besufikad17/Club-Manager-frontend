import React, {Components} from 'react';
import Header from './Header';

class Home extends Components {
    render(){
        return(
            <div>
                <Header/>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;