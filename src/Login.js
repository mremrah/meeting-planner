import React from 'react';

class  Login extends React.Component {

    render() {
        const { user } = this.props;

        return (
            <div className="text-left pl-2">
                <h1 className="text-primary">Login</h1>
                </div>
        );
    }
}

export default Login ;