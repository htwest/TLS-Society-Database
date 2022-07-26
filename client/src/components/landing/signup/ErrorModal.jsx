import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const ErrorModal = ({ isOpen, onClose, err, setErr }) => {
  const close = () => {
    setErr();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ERROR</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{err}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
