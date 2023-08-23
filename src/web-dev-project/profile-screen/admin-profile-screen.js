import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersThunk, adminDeleteUserByIdThunk } from '../services/admin-thunks';

const AdminProfileScreen = () => {
  const dispatch = useDispatch();
  
  // Fetch all users when the component mounts
  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  // Grab the relevant slices of state from your Redux store
  const allUsers = useSelector(state => state.admin.allUsers);
  const isLoading = useSelector(state => state.admin.loading);
  const error = useSelector(state => state.admin.error);

  const handleDeleteUser = (id) => {
    dispatch(adminDeleteUserByIdThunk(id));
  };

  return (
    <div>
      <h1>Admin Profile</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <h2>All Users:</h2>
        <ul>
          {allUsers.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProfileScreen;
