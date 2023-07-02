import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

interface User {
  id: number;
  name: string;
}

const Networking = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal
      })
      .then(res => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <ul>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Networking;
