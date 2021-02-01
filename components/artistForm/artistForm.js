import Layout from "../layout/layout";
import Navbar from "../navbar/navbar";

import styles from "./artistForm.module.css";
import React from "react";

export default class ArtistForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: '', email: '', phone: '', social: '',
            mediums: [], artStyle: '', fetchError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    submit() {
        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'nathan@bluprint.com',
                subject: 'New Artist Signup:',
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                social: this.state.social,
                mediums: this.state.mediums,
                artStyle: this.state.artStyle
            })
        }).then( (response ) => {
            if(response.ok) {
                console.log('Submitted')
            }
        }).catch((error) => {
                console.log(error);
        });
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleCheckboxChange(e) {
        const mediums = this.state.mediums;
        let index;

        if(e.target.name === 'other' && e.target.value){
            const otherIndex = mediums.findIndex(el => el.includes('Other:'));
            if(otherIndex < 0) {
                mediums.push('Other:' + e.target.value);
            } else {
                mediums[otherIndex] ='Other: ' +  e.target.value;
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
                    <img src="artistForm/header.png" className={styles.topCard}/>
                    <h3 className={styles.title}>Artist Signup:</h3>
                    <hr />
                    <div className={styles.artistForm}>
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
                            <div className={styles.row}>
                                <label>
                                    Social Media Handle
                                    <input type="text" value={this.state.social} onChange={this.handleChange}
                                           name="social"/>
                                </label>
                            </div>

                            <hr/>

                            <div className={`${styles.radioBox}`}>
                                <h4>What are your art mediums?</h4>
                                {checkBoxItems}
                                <label className={styles.row}>
                                    If other, please describe:
                                    <input type="text" name="other" onChange={this.handleCheckboxChange}/>
                                </label>
                            </div>

                            <hr/>

                            <h4>Describe Your Art Style</h4>

                            <textarea value={this.state.style} onChange={this.handleChange}
                                      name="artStyle"/>
                            <button onClick={this.submit}>Submit</button>

                        </form>
                    </div>
                </Layout>
            </div>
        )
    }
}
