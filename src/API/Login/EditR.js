import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditR = () => {

    const [name, setname] = useState('');
    const [detail, setdetail] = useState('');
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [coverimage, setcoverimage] = useState('');
    const [id, setid] = useState('');

    const token = localStorage.getItem("login");

    const navigat = useNavigate();

    const { dId } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();

        const Editdata = { id, name, detail, latitude, latitude, longitude, coverimage }

        // alert("hello")

        fetch("https://www.melivecode.com/api/auth/attractions/update", {
            method: "PUT",
            headers:
            {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(Editdata)
        }).then((res) => {
            alert("save")
        }).catch((err) => {
            console.log(err.message, "error");
        })

        navigat("/");
    }


    useEffect(() => {
        fetch("https://www.melivecode.com/api/attractions/" + dId)
            .then((res) => {
                return res.json()
            }).then((result) => {
                console.log(result.attraction.id, "result");
                // alert(result.id)
                setid(result.attraction.id);
                setname(result.attraction.name);
                setdetail(result.attraction.detail);
                setlatitude(result.attraction.latitude);
                setlongitude(result.attraction.longitude);
            })
    }, [])
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className='container' onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title text-center">
                                <h2>User Edit</h2>
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
                                                value={name}
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
                                                value={detail}
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
                                                value={latitude}
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
                                                value={longitude}
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

export default EditR



