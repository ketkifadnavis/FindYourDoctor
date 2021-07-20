import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";



//The useHistory gives you access to the history instance that you may use to navigate.

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    expertise: "",
    email: "",  
    phone: "",
    hospital: ""
  });

  const { name, expertise, email, phone, hospital } = user;

  //Instead of writing onchange function for each user attribute 
  //This function will set the value of attribute accordingly by taking attribute object as parameter.

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });  //...user is used to fetch all information
  };

//asyn is used so that next lines should'nt get executed unless this is completely executed. 
//This function will push the entered information to the main list.

  const onSubmit = async e => {                                   
    e.preventDefault();
    console.log(`Student successfully created!`);
    await axios.post("http://localhost:4000/users/add", user);
    history.push("/");
    console.log(user);
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Doctor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}         //After entering name the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Expertise"
              name="expertise"
              value={expertise}
              onChange={e => onInputChange(e)}       //After entering expertise the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="email"                              // input type email will automatically put the required constraints
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}        //After entering email the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}        //After entering phone no. the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Hospital Name"
              name="hospital"
              value={hospital}
              onChange={e => onInputChange(e)}        //After entering hospital name the input will change from blank to inserted text
            />
          </div>
          <button className="btn btn-success btn-block">Add Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;