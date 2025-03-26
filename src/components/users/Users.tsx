import { useState, useEffect } from "react";
import { UsersProps } from "./Users.types";

export function Users({ isFailRequest = false }: UsersProps) {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (isFailRequest) {
          throw new Error("Error fetching users");
        }
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data.map((user: { name: string }) => user.name));
      } catch {
        setError("Error fetching users");
      }
    };

    fetchUsers();
  }, [isFailRequest]);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
