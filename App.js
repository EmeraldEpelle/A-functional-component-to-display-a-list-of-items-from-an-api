import { useState, useEffect } from 'react';
import List from './List';

const App = () => {
  const [users, setUsers] = useState([
    {name: 'Emerald', title: 'Emeralds blog', username: 'EmeraldEpelle', },
    {name: 'Imelda', title: 'Imeldas blog', username: 'ImeldaEpelle',},
    {name: 'Family', title: 'Familys blog', username: 'FamilyEpelle' }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setUsers(data);
      setLoading (false);
    })
    .catch((error) => {
      setError(error. message);
      setLoading(false);
    });
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;
  if(users.length === 0) return <p>No users found.</p>

  return (
    <div>
      <h1> Welcome, Emerald's User List</h1>
      <List 
      items={users}
      renderItem={(user) => (
        <div style={{padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <strong>{user.name}</strong>
          <p>Email: {user.title}</p>
          <p>Username: {user.username}</p>
          </div>
      )}
      />
    </div>
  );
};

export default App;
