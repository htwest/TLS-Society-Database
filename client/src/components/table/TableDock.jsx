import React, { useState, useEffect } from "react";
import "../../css/dashboard/table/Table.css";

// Hooks
import fetchList from "../../hooks/fetchList";
import filterList from "../../hooks/filterList";

// Components
import Table from "./Table";
import DescriptionModal from "./popups/DescriptionModal";
import Pagination from "./Pagination";

const TableDock = () => {
  // States
  const [dbList, setDbList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [search, setSearch] = useState();
  const [field, setField] = useState();
  const [semester, setSemester] = useState();
  const [modalData, setModalData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Effects
  useEffect(() => {
    fetchList(setLoading, setDbList, setCurrentList);
  }, []);

  // Functions
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let paginationList = currentList.slice(indexOfFirstPost, indexOfLastPost);

  if (paginationList.length === 0) {
    paginationList = currentList;
  }

  const updateModal = (data) => {
    setModalData(data);
    setModalOpen(!modalOpen);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = () => {
    filterList(search, field, semester, dbList, setCurrentList);
  };

  return (
    <div className="table-container">
      <DescriptionModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={modalData}
      />
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-box">
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
        </div>
        <button
          className="search-button"
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
        updateModal={updateModal}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={currentList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default TableDock;
