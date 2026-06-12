import { useState } from "react";

const initialUsers = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  'aaa'
];

export default function UserFilter() {
//   const [users] = useState(initialUsers);
  const [query, setQuery] = useState("");
//   const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  const filteredUsers = initialUsers.filter(user => 
    user.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // setFilteredUsers(
    //   users.filter((user) =>
    //     user.toLowerCase().includes(value.toLowerCase())
    //   )
    // );

    // setFilteredUsers(
    //   initialUsers.filter((user) =>
    //     user.toLowerCase().includes(value.toLowerCase())
    //   )
    // );
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Фильтр" />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}