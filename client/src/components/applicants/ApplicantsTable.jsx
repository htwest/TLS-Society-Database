import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

// Hooks
import fetchUnapproved from "../../hooks/fetchUnapproved";

// Components
import ApplicantsItem from "./ApplicantsItem";

const ApplicantsTable = ({ onOpen }) => {
  const [unnapproved, setUnapproved] = useState();

  useEffect(() => {
    fetchUnapproved(setUnapproved);
  }, [unnapproved]);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Awaiting Approval</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Application</Th>
            <Th>Approve</Th>
            <Th>Reject</Th>
          </Tr>
        </Thead>
        <Tbody>
          {unnapproved
            ? unnapproved.map((item) => (
                <ApplicantsItem
                  item={item}
                  key={item.user_name}
                  onOpen={onOpen}
                />
              ))
            : null}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Application</Th>
            <Th>Approve</Th>
            <Th>Reject</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ApplicantsTable;
