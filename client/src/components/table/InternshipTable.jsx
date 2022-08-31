import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import "../../css/Table.css";

// Hooks
import fetchList from "../../hooks/fetchList";

// Components
import TableItem from "./TableItem";

const InternshipTable = () => {
  const [dbList, setDbList] = useState();
  const [modalData, setModalData] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
    fetchList(setDbList);
  }, []);

  return (
    <div className="table-container">
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{modalData.description}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      <div className="filter-box">
        <input type="text" placeholder="Search..." />
        <select name="field">
          <option value="" disabled selected hidden>
            Field
          </option>
          <option>Technology</option>
          <option>Government</option>
          <option>Policy</option>
        </select>
        <button>Go</button>
      </div>

      <table className="content-table">
        <thead>
          <tr>
            <th>Institute</th>
            <th>Semester</th>
            <th>Position</th>
            <th>Type</th>
            <th>Contact</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dbList
            ? dbList.map((item) => (
                <TableItem
                  item={item}
                  key={item.id}
                  setModalData={setModalData}
                  onOpen={onOpen}
                />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default InternshipTable;
