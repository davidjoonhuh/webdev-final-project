import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("Viewer");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      await dispatch(
          registerThunk({
            username,
            password,
            firstName,
            lastName,
            role,
            email,
            phone,
            address,
          })
      );
      navigate("/youboxd/profile");
    } catch (e) {
      alert(e);
    }
  };

  return (
      <div>
        <h1>Register</h1>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="mt-2">
          <label>FirstName</label>
          <input className="form-control" type="text" value={firstName}
                 onChange={(event) => setFirstName(event.target.value)} />
        </div>

        <div className="mt-2">
          <label>LastName</label>
          <input className="form-control" type="text" value={lastName}
                 onChange={(event) => setLastName(event.target.value)} />
        </div>


        <div className="mt-2">
          <label>Email</label>
          <input className="form-control" type="text" value={email}
                 onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="mt-2">
          <label>Phone</label>
          <input className="form-control" type="text" value={phone}
                 onChange={(event) => setPhone(event.target.value)} />
        </div>

        <div className="mt-2">
          <label>Address</label>
          <input className="form-control" type="text" value={address}
                 onChange={(event) => setAddress(event.target.value)} />
        </div>


        <div className="mt-2">
          <label>Choose Your Role:</label>
          <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
          >
            <option value="Viewer">Viewer</option>
            <option value="Administrator">Administrator</option>
            <option value="User">User</option>
          </select>

        </div>
        <button className="btn btn-primary mt-2" onClick={handleRegister}>
          Register
        </button>
      </div>
  );

}
export default RegisterScreen;
