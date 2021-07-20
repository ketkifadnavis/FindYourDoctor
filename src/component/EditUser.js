import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

//Editing User is almost similar to Adding user.
//In this case we will use id as parameter to edit information of the selected one.
//The useHistory gives you access to the history instance that you may use to navigate.
//useParams returns an object of key/value pairs of URL parameters to access match params of the current Route


const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({        //useState will allow functional components to have state
    name: "",                               //We can also use state component instead of this.
    expertise: "",
    email: "",
    phone: "",
    hospital: ""
  });

//Instead of writing onchange function for each user attribute 
//This function will set the value of attribute accordingly by taking attribute object as parameter.

  const {name, expertise, email, phone, hospital } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  //useEffect inside the component lets us access the count state variable right from the effect. 

  useEffect(() => {
    loadUser();
  }, []);

//asyn function knows how to expect the possibility of the await keyword being used to invoke asynchronous code.  
//asyn is used so that next lines should'nt get executed unless this is completely executed and then return the result.
//This function will push the entered information to the main list.

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/users/update/${id}`, user);
    console.log(`Student successfully edit!`);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/edit/${id}`);
    setUser(result.data);
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Information</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}                      //After entering name the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your expertise"
              name="expertise"
              value={expertise}
              onChange={e => onInputChange(e)}                    //After entering name the input will change from blank to inserted text
            />
          </div>
          <div className="form-group">
            <input
              type="email"                                      // input type email will automatically put the required constraints
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}                                       //After entering email the input will change from blank to inserted text
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}                                       //After entering phone no. the input will change from blank to inserted text
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your hospital Name"
              name="hospital"
              value={hospital}
              onChange={e => onInputChange(e)}                          //After entering hospital name the input will change from blank to inserted text
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;