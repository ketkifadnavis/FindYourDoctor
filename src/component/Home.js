import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';  //Delete icon is imported
import { FaUserEdit } from 'react-icons/fa';  //Edit icon is imported
import { FaEye } from 'react-icons/fa';       //Eye icon is imported for View option
import { useHistory, useParams } from "react-router-dom"; 
const Home = () => {
  const [users, setUser] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users/");
    setUser(result.data.reverse());     //To display recently added doctor at first row , reverse function is applied.
  };

  const deleteUser = async _id => {
    await axios.delete(`http://localhost:4000/users/delete/${_id}`);   //delete is done on taking id as parameter
    loadUsers();
  };

  return (
    <div className="container" >
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Expertise</th>
              <th scope="col">Email</th>
              <th scope="col">Hospital</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.expertise}</td>
                <td>{user.email}</td>
                <td>{user.hospital}</td>
                <td>{user.phone}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/${user._id}`}>
                    <FaEye></FaEye>
                  </Link>
                  <Link
                    class="btn btn-outline-dark  mr-2"
                    to={`/edit/${user._id}`}
                  >
                   <FaUserEdit></FaUserEdit>
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                   <FaTrashAlt></FaTrashAlt>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;