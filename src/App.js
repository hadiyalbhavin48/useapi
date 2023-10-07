
import './App.css';
import './style.css'

import Login from './API/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './API/Login/List';
import Create from './API/Login/create';
import EditR from './API/Login/EditR';
function App() {
  return (
    <div className="App">
      <h1>Hello Api</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add' element={<Create />} />
          <Route path='/add/edit/:dId' element={<EditR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// -------------------- Login Asc ---------------------------

// import './style.css'
// import React from 'react'
// import Sigin from './Login/Sigin'
// import Profile from './Login/Profile'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const App = () => {
//   // <Sigin />
//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Sigin />
//         <Routes>
//           <Route path="/profile" element={<Profile />}>

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// ------------------- Get Api --------------------------------


// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import GetApi from './GetApi/GetApi'
// import UserList from './PostApi/UserList'
// import PostApi from './GetApi/PostApi'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<GetApi />} />
//           {/* <Route path='/' element={<UserList />} /> */}
//           <Route path='/post' element={<PostApi />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App