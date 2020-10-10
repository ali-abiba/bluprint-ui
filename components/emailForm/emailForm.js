import React from 'react'
import styles from './emailForm.module.css';

export default class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', email: '', submitted: false, fetchError: ''};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    clearForm() {
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({email: ''});
    }

    submit(e) {
        e.preventDefault();
        fetch('/api/addEmail', {
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
        }).then( (response ) => {
            if(response.ok) {
                const content = response.json();
                this.setState({submitted: true});
                this.clearForm();
                this.state.fetchError = '';
                console.log(this.state);
            }
        }).catch((error) => {
            this.state.fetchError = error.message;
        })

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
                {!this.state.submitted &&
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
                            <input type="email" value={this.state.email} onChange={this.handleChange} name="email"/>
                        </label>
                    </div>
                    <button type="submit">Submit</button>


                </form>
                }
                {this.state.submitted === true && <h3 className={styles.success}>Thank you, we'll be in touch!</h3>}
            </div>
        )
    }


}
