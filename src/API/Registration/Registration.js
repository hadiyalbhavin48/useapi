// https://jsonplaceholder.typicode.com/users

//     "name": "sdfsdfsdf",
//     "username": "Bret",
//     "email": "Sincere@april.biz",

import React, { useState } from 'react'

const Registration = () => {

    const [name, setFname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const tokan = localStorage.getItem("login");
    // console.log(tokan, "tokan");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            'name': name,
            'username': username,
            'email': email,
        }

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((result) => {
            console.log(result, "result");
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className='container' onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title text-center">
                                <h2>User Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* <div className="form-group">
                                            <label>ID</label>
                                            <input value={Id} disabled="disabled" className="form-control"></input>
                                        </div> */}
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type='text'
                                                onChange={e => setFname(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>username</label>
                                            <input
                                                type='text'
                                                onChange={e => setUsername(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type='text'
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            {/* <Link to="/" className="btn btn-danger">Back</Link> */}
                                            <button type='button' className="btn btn-danger"
                                            >Reset</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Registration