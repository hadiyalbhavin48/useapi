// https://jsonplaceholder.typicode.com/users

//     "name": "sdfsdfsdf",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "phone": "1-463-123-4447",
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PostApi = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "name": name,
      "username": username,
      "email": email,
      "phone": phone
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
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
                      <label>Name</label>
                      <input
                        type='text'
                        onChange={e => setName(e.target.value)}
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

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>phone </label>
                      <input
                        type='text'
                        onChange={e => setPhone(e.target.value)}
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