import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Cookie from "./UserCookie";
import CookieTime from "./CookieTime";
import Category from "./Category";
import Dishes from "./Dishes";

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to React</h1>
      <Cookie />
      <CookieTime />
      <Category />
      <Dishes />
      {/*
         <BrowserRouter>
         <div className='links'>
           <button className='btn1'>
             <Link to='/todosql'>Todo App</Link>
           </button>
           <button className='btn1'>
             <Link to='/authors'>Author App</Link>
           </button>
         </div>
         <Routes>
           <Route path='todosql' element={<Todo />} />
           <Route path='/authors' element={<Author />} />
         </Routes>
       </BrowserRouter>*/}
    </div>
  );
};

export default App;
