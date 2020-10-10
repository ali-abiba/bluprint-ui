import React from 'react'
import styles from './emailForm.module.css';

export default class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    async submit(e) {
        e.preventDefault();
        const rawResponse = await fetch('/api/addEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
        });
        const content = await rawResponse.json();
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} className={styles.form}>
                    <h3>Support us by subscribing to our Email list for updates!</h3>

                    <div className={styles.row}>
                        <label>
                            First Name
                            <input type="text" value={this.state.firstName} onChange={this.handleChange}
                                   name="firstName"/>
                        </label>
                        <label>
                            Last Name
                            <input type="text" value={this.state.lastName} onChange={this.handleChange}
                                   name="lastName"/>
                        </label>
                    </div>
                    <div className={styles.emailRow}>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label>
                </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }


}
