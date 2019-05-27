import React from 'react';
import { Link } from '@reach/router';

class Welcome extends React.Component {

    render() {
        const { displayName, logOutUser } = this.props;

        return (
            <div className="text-left pl-2">
                <span className="text-secondary font-weight-bold pl-1">
                    Welcome {displayName}
                </span>,
                <Link to='/login'
                    className="font-weight-bold text-primary pl-1"
                    onClick={e => {e.preventDefault(); alert(e); logOutUser(e);}}
                >Log out</Link>
            </div>
        );
    }
}

export default Welcome;