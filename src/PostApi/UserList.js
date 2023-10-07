// import { Button } from 'bootstrap'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const UserList = () => {
//     const [useData, setUserData] = useState([]);
//     console.log(useData, "all data");


//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }).then((res) => {
//             return res.json()
//         }).then((result) => {
//             // console.log(result, "result");
//             setUserData(result);
//         })
//     }, [])
//     return (
//         <div>
//             <div className="container">
//                 <div className="card">
//                     <div className="card-title text-center">
//                         <h2>User Listing</h2>
//                     </div>
//                     <div className="card-body">
//                         <div className="divbtn">
//                             <Link to="/post" className="btn btn-success">Create</Link>
//                         </div>
//                         <table className="table table-bordered">
//                             <thead className="bg-dark text-white">
//                                 <tr>
//                                     <td align="right">ID</td>
//                                     <td>Name</td>
//                                     <td>username</td>
//                                     <td>Email</td>
//                                     <td>phone</td>
//                                     <td>Action</td>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     useData && useData.map((curElm) =>
//                                         <tr key={curElm.id}>
//                                             <td>{curElm.id}</td>
//                                             <td>{curElm.name}</td>
//                                             <td>{curElm.username}</td>
//                                             <td>{curElm.email}</td>
//                                             <td>{curElm.phone}</td>

//                                             <td>
//                                                 <a className="btn btn-success">Edit</a>
//                                                 <a className="btn btn-danger">Remove</a>
//                                             </td>
//                                         </tr>
//                                     )

//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserList




// {
//     id: 1,
//     title: '...',
//     body: '...',
//     userId: 1
//   }

import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const GetApi = () => {
    const [getUser, setUser] = useState([]);

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

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default GetApi