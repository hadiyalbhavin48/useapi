import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetApi = () => {
    const [getUser, setUser] = useState([]);

    const deleteRecord = (id) => {
        if (window.confirm("remove Posts")) {
            fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((res) => {
                    window.location.reload();
                }).catch((err) => {
                    console.log(err.message, "error");
                })
        }
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: { 'Content-type': 'application/json' }
        }).then((res) => {
            return res.json();
        }).then((result) => {
            // console.log(result,"result");
            setUser(result);
        })
    }, [])
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title text-center">
                        <h2>User Listing</h2>
                    </div>
                    <div className="card-body">
                        <div className="divbtn">

                            <Link to="/post" className="btn btn-success">Create</Link>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>userId</th>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getUser && getUser.map((curEmt) =>
                                        <tr key={curEmt.id}>
                                            <td>{curEmt.userId}</td>
                                            <td>{curEmt.id}</td>
                                            <td>{curEmt.title}</td>
                                            <td>{curEmt.body}</td>
                                            <td>
                                                <a

                                                    className="btn btn-success">Edit</a>
                                                <a
                                                    onClick={() => { deleteRecord(curEmt.id) }}
                                                    className="btn btn-danger">Delete</a>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetApi