import React,{Fragment} from 'react'


export function Login() {
    return (
            <div className="login">
                <form method="post/get">
                    <h1>Login</h1>
                    <label  for="username">Username</label><input type="text" id="uname" name="uname"></input>
                    <label  for="password">Password</label><input type="password" id="pwd" name="pwd"></input>
                    <input type="submit" id="button" name="button"></input>
                </form>
                <p id="paragraph">Not have an account?<a href="#">Sign Up Here</a></p>
            </div>
    )

};
