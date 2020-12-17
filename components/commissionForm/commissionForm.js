import React from "react";
import Layout from "../layout/layout";
import Navbar from "../navbar/navbar";
import styles from "../artistForm/artistForm.module.css";
import {ToastContainer, toast} from "react-toastify";

export default class CommissionForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: '', email: '', phone: '',
            mediums: [], description: '', fetchError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(e) {
        const mediums = this.state.mediums;
        let index;

        if (e.target.name === 'other' && e.target.value) {
            const otherIndex = mediums.findIndex(el => el.includes('Other:'));
            if (otherIndex < 0) {
                mediums.push('Other:' + e.target.value);
            } else {
                mediums[otherIndex] = 'Other: ' + e.target.value;
            }
        } else {
            if (e.target.checked) {
                mediums.push(e.target.value)
            } else {
                index = mediums.indexOf(e.target.value);
                mediums.splice(index, 1);
            }
        }
        this.setState({mediums: mediums});
    }

    submit(e) {
        e.preventDefault();
        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'ali@bluprint.art',
                subject: 'New Commission Request',
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                mediums: this.state.mediums,
                artStyle: this.state.description
            })
        }).then( (response ) => {
            if(response.ok) {
                toast.error('🦄 Wow so easy!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((error) => {
        });
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        const checkBoxItems = ['Digital', 'Paint', 'Ink', '3D/Scuplture', 'Pencil/Charcoal'].map((val, index) => {
            return (
                <label className={styles.radioRow} key={index}>
                    {val}
                    <input type="checkbox" name="mediums" value={val} onChange={this.handleCheckboxChange}/>
                </label>
            )
        });
        return (
            <div>
                <Layout>
                    <Navbar/>
                    <div style={{backgroundImage: `url('commissionForm/header.jpg')`}} className={styles.topCard}>
                        <h3>Commission Quote Request:</h3>
                    </div>
                    <div className={styles.commissionForm}>
                        <form className={styles.form}>
                            <div className={styles.row}>
                                <label>
                                    Full Name
                                    <input type="text" value={this.state.name} onChange={this.handleChange}
                                           name="name"/>
                                </label>
                                <label>
                                    Phone Number
                                    <input type="text" value={this.state.phone} onChange={this.handleChange}
                                           name="phone"/>
                                </label>
                            </div>
                            <div className={styles.row}>
                                <label>
                                    Email
                                    <input type="text" value={this.state.email} onChange={this.handleChange}
                                           name="email"/>
                                </label>
                            </div>

                            <hr/>

                            <div className={`${styles.radioBox}`}>
                                <h4>What some potential mediums for your piece?</h4>
                                {checkBoxItems}
                                <label className={styles.row}>
                                    If other, please describe:
                                    <input type="text" name="other" onChange={this.handleCheckboxChange}/>
                                </label>
                            </div>

                            <hr/>

                            <h4>Describe Your Dream Piece</h4>

                            <textarea value={this.state.description} onChange={this.handleChange}
                                      name="description"/>
                            <button onClick={this.submit}>Submit</button>

                        </form>
                    </div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Layout>
            </div>
        )
    }
}
