// UserList.jsx
const users = [
    { id: 1, name: "Алексей", age: 25 },
    { id: 2, name: "Мария", age: 19 },
    { id: 3, name: "Иван", age: 32 },
  ];
  
  function UserList({minAge}) {
    
    return (
      <ul>
        {users.filter(u => u.age >= minAge).map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    );
  }
  
  export default UserList;