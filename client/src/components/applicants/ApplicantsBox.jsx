import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";

// Components
import ApplicantsTable from "./ApplicantsTable";
import ModDrawer from "../mod/ModDrawer";

const ApplicantsBox = ({ userData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Application Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              {" "}
              Hello this is a test of the Modal. Please Do not Worry about the
              lack of content that will be to come. Lalelelalou{" "}
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Heading>Unapproved Users</Heading>
      <ApplicantsTable onOpen={onOpen} />
      <ModDrawer />
    </>
  );
};

export default ApplicantsBox;
