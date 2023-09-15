
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PostApi = () => {
    const [userId, setuserId] = useState('');
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            "userId": userId,
            "title": title,
            "body": body,

        }

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((result) => {
            console.log(result, "result");
            alert(result.id);
        }).catch((err) => {
            console.log(err.message, "error");
        })

        navigate("/");
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

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>userId</label>
                                            <input
                                                type='text'
                                                onChange={e => setuserId(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>title</label>
                                            <input
                                                type='text'
                                                onChange={e => settitle(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>body</label>
                                            <input
                                                type='text'
                                                onChange={e => setbody(e.target.value)}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
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

export default PostApi