import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends React.Component {

    render() {
        const { user, logOutUser } = this.props;

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                     <Link to="/" className="navbar-brand"><FaUsers  className="mr-1 mt-0"/>Meeting Planner</Link>
                </div>
                {user && (
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/meetings">Meetings</Link>
                        <Link className="nav-item nav-link" to="/logout" 
                        onClick={e=>logOutUser(e)}>Logout</Link>
                    </div>
                )}
                {!user && (
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/login">Login</Link>
                        <Link className="nav-item nav-link" to="/register">Register</Link>
                    </div>
                )}
            </nav>
        );
    }
}

export default Navigation;