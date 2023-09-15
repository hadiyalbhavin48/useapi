import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
    const [useData, setUserData] = useState([]);
    console.log(useData, "all data");

    const navigat = useNavigate();

    // delete
    const Loaddelete = (id) => {

        // debugger;
        // alert(id);

        const isId = {
            id: id
        }

        if (window.confirm("Do you want to remove?")) {
            fetch("https://www.melivecode.com/api/attractions/delete", {  // header pass parameter (id)
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(isId)
            }).then((res) => {
                // alert("Removed successfully.")
                window.location.reload();   // page reload
            }).catch((err) => {
                console.log(err.message, "error");
            })
        }
        // console.log(id, "id");

    }

    // Edit

    const editRecord = (id) => {
        navigat("/add/edit/" + id);
    }

    useEffect(() => {
        fetch("https://www.melivecode.com/api/attractions", {
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

                            <Link to="/add" className="btn btn-success">Create</Link>
                            <Link to="/login" className="btn btn-success">Login</Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td align="right">id</td>
                                    <td>name</td>
                                    <td>detail</td>
                                    <td>latitude</td>
                                    <td>longitude</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    useData && useData.map((curElm) =>
                                        <tr key={curElm.id}>
                                            <td>{curElm.id}</td>
                                            <td>{curElm.name}</td>
                                            <td>{curElm.detail}</td>
                                            <td>{curElm.latitude}</td>
                                            <td>{curElm.longitude}</td>
                                            <td>
                                                <a onClick={() => { editRecord(curElm.id) }} className="btn btn-success">Edit</a>
                                                <a onClick={() => { Loaddelete(curElm.id) }} className="btn btn-danger">delete</a>
                                            </td>
                                        </tr>
                                    )

                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default List

