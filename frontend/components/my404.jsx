import React from 'react';
import { Link } from 'react-router-dom'

class my404page extends React.Component{

    render(){
        return (
            <div>
                <h1>Page Not Found</h1>
                <Link to="/">Back to homepage</Link>
            </div>
        )
    }
}

export default my404page;