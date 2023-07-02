import React from 'react'

export default function Signup() {
    return (
        <div className="signup">
            <form method="post/get">
                <h1>Sign Up</h1>
                <label for="fname">First Name</label><input type="text" id="fname" name="fname"></input>
                <label for="lname">Last Name</label><input type="text" id="lname" name="lname"></input>
                <label for="mail">Email</label><input type="email" id="mail" name="mail"></input>
                <label for="password">Password</label><input type="password" id="password" name="password"></input>
                <label for="cpassword">Confirm Password</label><input type="password" id="cpassword" name="cpassword"></input>
                <input type="submit" id="button" name="button"></input>
                <p>By clicking the Sign Up button,you agree to our<a href="#">Terms and Condition </a> and<a href="#">Policy Privacy</a></p>
            </form>
            <p id="paragraph">Already have an account?<a href="#">Login here</a></p>
        </div>
    )
};