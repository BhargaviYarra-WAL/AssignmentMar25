import { useState, useEffect } from "react";
import axios from "axios";
const UserMysql = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getusers();
  }, []);
  const getusers = () => {
    axios
      .get("/usermysql")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addUser = (event) => {
    event.preventDefault();
    let userObject = {
      email: event.target.email.value,
      password: event.target.password.value,
      userinfo: event.target.userinfo.value,
      dob: event.target.dob.value,
    };
    axios
      .post("/usermysql", userObject)
      .then((res) => {
        getusers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteUser = (email) => {
    axios
      .delete("/usermysql/" + email)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getusers();
  };
  let deleteAll = () => {
    axios.delete("/usermysql").then((res) => {
      console.log(res.data);
    });
    getusers();
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <h2>USERS APP</h2>
        <input type='email' name='email' Placeholder='Enter email' />
        <br />
        <input type='password' name='password' Placeholder='Enter password' />
        <br />
        <input type='text' name='userinfo' Placeholder='Enter user info' />
        <br />
        <input type='date' name='dob' />
        <br />

        <button className='btn1'>Add user</button>
      </form>
      <div>
        <h2>Users List</h2>
        {users.map((val, index) => {
          return (
            <div className='showp'>
              <b>Email:</b>
              {val.email}
              <br />
              <b>Password:</b>
              {val.password}
              <br />
              <b>Userinfo:</b>
              {val.userinfo}
              <br />
              <b>Dob:</b>
              {val.dob}
              <br />
              <button
                className='btn1'
                onClick={() => {
                  deleteUser(val.email);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
        <button className='btn1' onClick={deleteAll}>
          Delete All users
        </button>
      </div>
    </div>
  );
};
export default UserMysql;
