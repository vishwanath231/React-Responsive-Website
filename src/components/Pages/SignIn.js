import React from 'react';
import IMG1 from '../../images/SignIn.svg';
import './SignIn.css';

function SignIn() {


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
   
    const emailValue = (e)=> {
        setEmail(e.target.value)
    }
     const passwordValue = (e)=> {
        setPassword(e.target.value)
    }

    const submitForm = () => {
        if (email === "") {
            alert("Please Enter the Email");
        }else{
            if (password === "") {
                alert("Please Enter the Password");
            }else{
                
                alert("Email : " + email + " & Password : " + password );
            }
        }
    }

    return (
        <>
            <div className="signIn_container">
                <div className="signIn_grid">
                    <div className="signIn_box">
                        <img src={IMG1} alt="" />
                    </div>
                    <form className="frm" onSubmit={submitForm}>
                        <div className="form_title">Sign In</div>
                        <div className="from_div">
                            <input type="email" onChange={emailValue} className="form_input" placeholder=" " />
                            <label className="form_label">Email</label>
                        </div>
                        <div className="from_div">
                            <input type="password" onChange={passwordValue} className="form_input" placeholder=" " />
                            <label className="form_label">Password</label>
                        </div>
                        <button type="submit" className="save">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;
