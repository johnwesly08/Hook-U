import React from 'react'

export default function Signup() {
    return (
        <section className="app">
        <div className="signup">
            <form method="post/get">
                <h1>Sign Up</h1>
                <label htmlFor="fname">First Name</label><input type="text" id="fname" name="fname"></input>
                <label htmlFor="lname">Last Name</label><input type="text" id="lname" name="lname"></input>
                <label htmlFor="mail">Email</label><input type="email" id="mail" name="mail"></input>
                <label htmlFor="password">Password</label><input type="password" id="password" name="password"></input>
                <label htmlFor="cpassword">Confirm Password</label><input type="password" id="cpassword" name="cpassword"></input>
                <input type="submit" id="button" name="button"></input>
                <p id='cnfm'>By clicking the Sign Up button,you agree to our<a href="#">Terms and Condition </a> and<a href="#">Policy Privacy</a></p>
            </form>
            <p id="para">Already have an account?<a href="#">Login here</a></p>
        </div>
        </section>

    )
};