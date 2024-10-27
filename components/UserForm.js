// components/UserForm.js
import React from 'react';
import styles from './UserForm.module.css';

const UserForm = () => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Create New User</h2>
            <form>
                <label className={styles.label}>Roles</label>
                <select className={styles.input}>
                    <option>Applying For</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>

                <label className={styles.label}>First Name</label>
                <input type="text" className={styles.input} placeholder="Enter first name" />

                <label className={styles.label}>Last Name</label>
                <input type="text" className={styles.input} placeholder="Enter last name" />

                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} placeholder="Email" />

                <label className={styles.label}>Password</label>
                <input type="password" className={styles.input} placeholder="Password" />

                <div className={styles.checkboxContainer}>
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className={styles.checkboxLabel}>
                        I agree with the <a href="#" className={styles.link}>Terms & Conditions</a>
                    </label>
                </div>

                <label className={styles.label}>Preferable Mode Of Contact</label>
                <div className={styles.radioContainer}>
                    <label className={styles.radioLabel}><input type="radio" name="contact" /> SMS</label>
                    <label className={styles.radioLabel}><input type="radio" name="contact" /> Email</label>
                    <label className={styles.radioLabel}><input type="radio" name="contact" /> Telephone</label>
                </div>

                <button type="submit" className={styles.submitButton}>Submit Application</button>
            </form>
        </div>
    );
};

export default UserForm;
