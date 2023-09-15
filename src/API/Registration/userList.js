import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [useData, setUserData] = useState([]);
    console.log(useData, "all data");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json()
        }).then((result) => {
            // console.log(result, "result");
            setUserData(result);
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
                            <Link to="/registration" className="btn btn-success">Create</Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td align="right">ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    useData && useData.map((curElm) => {
                                        <tr key={curElm.id}>
                                            <td>{curElm.name}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <a className="btn btn-success">Edit</a>
                                                <a className="btn btn-danger">Remove</a>
                                            </td>
                                        </tr>
                                    })

                                }
                                {/* {
                                data && data.map((curElm) => (
                                    <tr key={curElm.id}>
                                        {console.log(curElm, "Current")}
                                        <td>{curElm.id}</td>
                                        <td>{curElm.name}</td>
                                        <td>{curElm.email}</td>
                                        <td>{curElm.phone}</td>
                                        <td>
                                            <a onClick={() => { LoadEdit(curElm.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { LoadRemove(curElm.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetails(curElm.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            } */}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList