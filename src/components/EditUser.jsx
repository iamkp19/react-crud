import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const { name, city, email, phone } = user;

  const onInputChanged = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container w-75 mx-auto shadow text-center p-5 mt-4">
      <h2 className="mb-5">Add New User</h2>
      <form onSubmit={(e) => onSubmitHandle(e)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChanged(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(e) => onInputChanged(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your City"
            name="city"
            value={city}
            onChange={(e) => onInputChanged(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChanged(e)}
          />
        </div>
        <button className="btn btn-primary btn-block">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
