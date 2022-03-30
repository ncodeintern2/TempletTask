import React from 'react'
import classes from './Login.module.css'
const Login = (props) => {
    
    const submitHander =(e)=>{
        e.preventDefault()
        props.loginHander(true)
    }


    return (
        <div className={classes.container}>
            <form className="form-signin" onSubmit={submitHander}>
                <h1>Please sign in</h1>
                <div className={props.row}>
                    <div className={props.col}>
                        <input
                            type="email"
                            name="user_id"

                            placeholder="Enter Username"
                        />
                        <input
                            type="password"
                            name="user_password"

                            placeholder="Enter Password"
                        />
                        <button onSubmit={submitHander}>SingIn</button>
                    </div>
                </div>
                
            </form>

        </div>
    )
}

export default Login