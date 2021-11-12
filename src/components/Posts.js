import React, {Components} from 'react';
import Header from './Header';

class Posts extends Components {
    render(){
        return(
            <div>
                <Header/>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default Posts;