// Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imthcm4ueW9uZ0BtZWxpdmVjb2RlLmNvbSIsImlhdCI6MTY5MzgyMjAxNiwiZXhwIjoxNjkzODIyMDc2fQ.HG1f4GqzsiUsmL5pLzINSHK7q9YSQW4DI-qXL6arYsY

import React, { useEffect, useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log({ email, password }, "Email");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": "karn.yong@melivecode.com",
                "password": "melivecode",
                "expiresIn": 12000000
            })
        }

        fetch("https://www.melivecode.com/api/login", requestOptions).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp, "resp");
            console.log(resp.accessToken, "tokan");

            alert(resp["message"]);
            localStorage.setItem("login", resp.accessToken)
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <h2>Login Form</h2>
                    <form method='POST' onSubmit={handleSubmit}>
                        <label htmlFor="username" className='text-primary'>Username</label>
                        <input
                            type="text"
                            onChange={e => { setEmail(e.target.value) }}
                            id="username"
                            className='mb-3' placeholder="Enter your username" />
                        <label htmlFor="password" className='text-primary'>Password</label>
                        <input
                            type="password"
                            onChange={e => { setPassword(e.target.value) }}
                            id="password"
                            className='mb-3' placeholder="Enter your password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login