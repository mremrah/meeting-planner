import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="container text-center">
                <div className="row justify-content-text">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div className="display-4 text-primary mt-3 mb-2"
                            style={{ fontSize: 2.8 + 'em' }}>
                            Meeting Log
                        </div>
                        <p className="lead">
                            App to create and manage individual meetings
                            </p>
                        {user === null && (
                            <span>
                                <Link to="/register" className="btn btn-outline-primary mr-2">Register</Link>
                                <Link to="/login" className="btn btn-outline-primary mr-2">Log-In</Link>
                            </span>
                        )}
                        {
                            user && (
                                <span>
                                    <Link to="/meetings" className="btn btn-primary mr-2">Meetings</Link>
                                </span>
                            )
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;