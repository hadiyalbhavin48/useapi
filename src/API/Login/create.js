
// https://www.melivecode.com/api/auth/attractions/create
//API Header : {'Content-Type':'application/json',
//               Authorization : Bearer login no tockan number}

// body
// "name": "sdfsdfsdfs",
// "detail": "Phi Phi Islands are a group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.",
// "latitude": 7.737619,
// "longitude": 98.7068755


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setname] = useState('');
    const [detail, setdetail] = useState('');
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');

    const navigate = useNavigate();

    const token = localStorage.getItem("login")

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            "name": name,
            "detail": detail,
            "latitude": latitude,
            "longitude": longitude,
            "coverimage": '',

        }


        fetch("https://www.melivecode.com/api/auth/attractions/create", {
            method: "POST",
            headers:
            {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((result) => {
            console.log(result, "result");
            // alert(result.id);
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
                                            <label>name</label>
                                            <input
                                                type='text'
                                                onChange={e => { setname(e.target.value) }}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>detail</label>
                                            <input
                                                type='text'
                                                onChange={e => { setdetail(e.target.value) }}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>latitude</label>
                                            <input
                                                type='text'
                                                onChange={e => { setlatitude(e.target.value) }}
                                                required
                                                className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>longitude</label>
                                            <input
                                                type='text'
                                                onChange={e => { setlongitude(e.target.value) }}
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

export default Create