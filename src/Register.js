import React from 'react';
import FormError from './FormError';
import firebase from './Firebase';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordControl: '',
            errorMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        let registationData = {
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password
        };
        
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(registationData.email,
            registationData.password)
            .then(()=> {
                this.props.registerUser(registationData.displayName);
            })
            .catch(error => {
                if (error.message !== null) {
                    this.setState({ errorMessage: error.message });
                } else {
                    this.setState({ errorMessage: null });
                }
            })
    }

    handleChange(e) {
        let itemName = e.target.name;
        let itemValue = e.target.value;

        this.setState({ [itemName]: itemValue }, () => {
            if (this.state.password !== this.state.passwordControl) {
                this.setState({ errorMessage: 'Passwords do not match!' });
            } else {
                this.setState({ errorMessage: null });
            }
        });
    }

    render() {
        const { user } = this.props;

        return (
            <form className="mt-3" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h3 className="font-weight-light mb-3">Register</h3>
                                    {this.state.errorMessage && (
                                        <FormError theMessage={this.state.errorMessage} />
                                    )}
                                    <div className="form-row">
                                        <section className="col-sm-12 form-group">
                                            <label
                                                className="form-control-label sr-only"
                                                htmlFor="displayName"
                                            >
                                                Display Name
                                                </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="displayName"
                                                placeholder="Display Name"
                                                name="displayName"
                                                value={this.state.displayName}
                                                onChange={this.handleChange}
                                                required />
                                        </section>
                                    </div>
                                    <section className="form-group">
                                        <label className="col-sm-12 sr-only"
                                            htmlFor="email"
                                        >
                                            E-mail
                                                </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="E-Mail"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required />
                                    </section>
                                    <div className="form-row">
                                        <section className="form-group col-sm-6">
                                            <label className="col-sm-12 sr-only"
                                                htmlFor="password"
                                            >
                                                Password
                                                </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required />
                                        </section>
                                        <section className="form-group col-sm-6">
                                            <label className="col-sm-12 sr-only"
                                                htmlFor="passwordControl"
                                            >
                                                Repeat Password
                                                </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="passwordControl"
                                                name="passwordControl"
                                                placeholder="Repeat Password"
                                                value={this.state.passwordControl}
                                                onChange={this.handleChange}
                                                required />
                                        </section>
                                    </div>
                                    <div className="form-group text-right mb-0">
                                        <button className="btn btn-primary" type="submit">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        );
    }
}

export default Register;