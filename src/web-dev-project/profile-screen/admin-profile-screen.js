import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUserThunk, logoutThunk } from "../services/auth-thunks";
import * as whoService from "../services/who-service";

function AdminScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadUsers = async () => {
    try {
      const allUsers = await whoService.findAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate("../login");
  };

  const handleDeleteUser = async () => {
    if (selectedUser) {
      try {
        await dispatch(deleteUserThunk(selectedUser));
        loadUsers();
        setSelectedUser(null);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Admin Screen</h1>
      {currentUser && (
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      )}
      <div className="user-list">
        <div className="user-selection">
          <select
            value={selectedUser || ""}
            onChange={(event) => setSelectedUser(event.target.value || null)}
          >
            <option value="" disabled>Select a user</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.username}
              </option>
            ))}
          </select>
          {currentUser && selectedUser && (
            <button onClick={handleDeleteUser} className="btn btn-danger">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
