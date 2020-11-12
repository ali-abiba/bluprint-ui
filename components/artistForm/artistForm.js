import Layout from "../layout/layout";
import Navbar from "../navbar/navbar";

import styles from "./artistForm.module.css";
import React from "react";

export default function ArtistForm() {
    return (
        <div>
            <Layout>
                <Navbar/>
                <div className={styles.artistForm}>
                    <form onSubmit={this.submit} className={styles.form}>
                        <h3>Artist Signup:</h3>
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
                </div>
            </Layout>
        </div>
    )
}
