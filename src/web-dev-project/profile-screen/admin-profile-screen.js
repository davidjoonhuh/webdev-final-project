import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const AdminProfileScreen = () => {
  const [users, setUsers] = useState([
    // Dummy users data
    { id: 1, username: 'Alice' },
    { id: 2, username: 'Bob' },
  ]);

  const [comments, setComments] = useState([
    // Dummy comments data
    { id: 1, text: 'Nice post!' },
    { id: 2, text: 'Interesting!' },
  ]);

  const isAdmin = () => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser.isAdmin;
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  useEffect(() => {
    // Fetch admin data here if needed
  }, []);

  if (!isAdmin()) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Admin Profile Screen</h1>

      <div>
        <h2>User Management</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Content Management</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.text} <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Analytics</h2>
        {/* Display site usage statistics */}
      </div>
    </div>
  );
};

export default AdminProfileScreen;
