import React, { useState, useEffect } from "react";
import "../../css/profile/table/Table.css";

// Hooks
import fetchList from "../../hooks/fetchList";

// Components
import Table from "./Table";

const Internships = () => {
  const [dbList, setDbList] = useState();
  const [search, setSearch] = useState();
  const [field, setField] = useState();
  const [semester, setSemester] = useState();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    fetchList(setDbList);
  }, []);

  const handleSubmit = () => {
    const filter = {
      type: field,
      semester: semester,
    };

    const nameFilter = dbList.filter((item) => {
      if (search === "" || search === undefined) {
        return item;
      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    const filteredList = nameFilter.filter((item) => {
      if (
        (filter.type === item.type || filter.type === undefined) &&
        (filter.semester === item.semester || filter.semester === undefined)
      ) {
        return item;
      }
      return false;
    });

    setDbList(filteredList);
  };

  return (
    <div className="table-container">
      <div className="filter-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select name="field" onChange={(e) => setField(e.target.value)}>
          <option value="" disabled selected hidden>
            Field
          </option>
          <option value="Technology">Technology</option>
          <option value="Government">Government</option>
          <option value="Policy">Policy</option>
          <option value="Law">Law</option>
        </select>

        <select name="Semester" onChange={(e) => setSemester(e.target.value)}>
          <option value="" disabled selected hidden>
            Semester
          </option>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
        </select>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Go
        </button>
      </div>
      <Table list={dbList} />
    </div>
  );
};

export default Internships;
