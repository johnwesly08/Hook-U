import React,{Fragment} from 'react'


export function Login() {
    return (
        <section className="app">
            <div className="login">
                <form method="post/get">
                    <h1>Login</h1>
                    <label  htmlFor="username">Username</label><input type="text" id="uname" name="uname"></input>
                    <label  htmlFor="password">Password</label><input type="password" id="password" name="password"></input>
                    <input type="submit" id="button" name="button"></input>
                </form>
                <p id="para">Not have an account?<a href="#">Sign Up Here</a></p>
            </div>
            </section>
    )

};
