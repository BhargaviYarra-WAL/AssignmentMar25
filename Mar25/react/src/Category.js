import { useState, useEffect } from "react";
import axios from "axios";
const Category = () => {
  let [state, setState] = useState(false);
  let [category, setCategory] = useState([]);
  let [name, setName] = useState();
  let [description, setDescription] = useState();
  let [data, setData] = useState({});
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    axios
      .get("/category")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setDescription("");
  };
  let addCategory = (event) => {
    event.preventDefault();
    let categoryObject = {
      Name: event.target.name.value,
      description: event.target.description.value,
    };
    console.log(categoryObject);
    axios
      .post("/category", categoryObject)
      .then((res) => {
        getCategory();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteCategory = (ind) => {
    console.log(ind);
    axios
      .delete("/category/" + ind)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getCategory();
  };
  const deleteAll = () => {
    axios
      .delete("/category")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getCategory();
  };

  const editCategory = (value) => {
    console.log(value);
    setState(true);
    setData(value);
    setName(value.Name);
    setDescription(value.description);
  };
  const updateCategory = (event) => {
    event.preventDefault();
    let categoryObject = {
      Name: event.target.name.value,
      description: event.target.description.value,
    };
    axios.put(`/category/${data.CatId}`, categoryObject).then((res) => {
      getCategory();
      setState(false);
      console.log(res.data);
    });
    getCategory();
  };
  return (
    <div>
      <h2>Category Component</h2>
      {state ? (
        <form onSubmit={updateCategory}>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <textarea
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button className='btn1'>Update</button>
        </form>
      ) : (
        <form onSubmit={addCategory}>
          <input type='text' name='name' placeholder='Enter Category Name' />
          <br />
          <textarea
            name='description'
            placeholder='Enter Description'
          ></textarea>
          <br />
          <button className='btn1'>Add</button>
        </form>
      )}

      <button className='btn1' onClick={deleteAll}>
        DeleteAll
      </button>
      <table>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>

        {category !== undefined ? (
          category.map(function (val, ind) {
            return (
              <tr>
                <td>{ind + 1}</td>
                <td>{val.Name}</td>
                <td>{val.description}</td>
                <td>
                  <button onClick={() => deleteCategory(val.CatId)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => editCategory(val)}>Update</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>None</td>
          </tr>
        )}
      </table>
    </div>
  );
};
export default Category;
