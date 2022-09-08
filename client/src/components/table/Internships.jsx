import React, { useState, useEffect } from "react";
import "../../css/profile/table/Table.css";

// Hooks
import fetchList from "../../hooks/fetchList";
import filterList from "../../hooks/filterList";

// Components
import Table from "./Table";
import Pagination from "./Pagination";

const Internships = () => {
  // States
  const [dbList, setDbList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [search, setSearch] = useState();
  const [field, setField] = useState();
  const [semester, setSemester] = useState();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [mobile, setMobile] = useState(false);

  // Effects
  useEffect(() => {
    fetchList(setLoading, setDbList, setCurrentList);
  }, []);

  // Functions
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginationList = currentList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = () => {
    filterList(search, field, semester, dbList, setCurrentList);
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
      <Table
        list={paginationList}
        loading={loading}
        postsPerPage={postsPerPage}
        totalPosts={dbList.length}
        paginate={paginate}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={currentList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Internships;
