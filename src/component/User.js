import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { _id } = useParams();
  const [user, setUser] = useState({
    name: "",
    expertise: "",
    email: "",
    phone: "",
    hospital: ""
  });
 
  useEffect(() => {
    loadUser();
  }, []);
  
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4000/users/${_id}`);  //asyn is used so that next lines should'nt get executed unless this is completely executed. 
    setUser(res.data);                                                 //it will work like componentdidMount()
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">Doctor Id: {_id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">expertise: {user.expertise}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">hospital: {user.hospital}</li>
      </ul>
    </div>
  );
};

export default User;