// FilterForm.jsx
import { useState } from "react";

function FilterForm({minAge, onChange}) {
  

  return (
    <div>
      <label>
        Минимальный возраст:
        <input
          type="number"
          value={minAge}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FilterForm;