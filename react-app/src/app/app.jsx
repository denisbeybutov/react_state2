
// App.jsx
import UserList from "./UserList.jsx";
import FilterForm from "./FilterForm.jsx";
import { useState } from "react";

function Appl() {
    const [minAge, setMinAge] = useState(0);
    function changeAge(e){
        setMinAge(Number(e.target.value))
    }

  return (
    <div>
      <h1>Пользователи</h1>
      <FilterForm minAge={minAge} onChange={changeAge} />
      <UserList minAge={minAge} />
    </div>
  );
}

export default Appl;