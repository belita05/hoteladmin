import React from "react";
import './Login.css'
const Login = (props) => {
 const {email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    emailError,
    passwordError} = props;
 
    return(
     <section className="login">
        <div className="loginContainer">
            <h1>Admin Portal</h1>
            <label>Admin Username</label>
            <input type="text" autoFocus required value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
             <p className="errorMsg">{emailError}</p>
            <label>Admin Password</label>
            <input type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
              <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
            <button className="buttonLogin" onClick={handleLogin}>Login As Admin</button>
          
            </div>
        </div>
     </section>
 )
}
export default Login;