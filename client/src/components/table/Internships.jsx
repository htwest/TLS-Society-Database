import React, { useState, useEffect } from "react";
import "../../css/dashboard/table/Table.css";

// Hooks
import fetchList from "../../hooks/fetchList";
import filterList from "../../hooks/filterList";

// Components
import Table from "./Table";
import Modal from "./modal/Modal";
import Pagination from "./Pagination";

const Internships = () => {
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
  const paginationList = currentList.slice(indexOfFirstPost, indexOfLastPost);

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
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        data={modalData}
      />

      {/* <button onClick={() => handleModal()}>Modal</button> */}
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

export default Internships;
