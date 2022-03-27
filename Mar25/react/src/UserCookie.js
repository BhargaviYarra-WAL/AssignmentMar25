import React from "react";
import axios from "axios";

export default function Cookie() {
  const addCookie = (event) => {
    event.preventDefault();
    axios
      .get(`/cookie/setcookie/city/${event.target.city.value}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='cookie'>
      <h2>User Cookie</h2>
      <form onSubmit={addCookie}>
        <div>
          <b>Enter City</b>
        </div>
        <input type='text' placeholder='enter city' name='city' />
        <br />
        <button className='btn1' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
