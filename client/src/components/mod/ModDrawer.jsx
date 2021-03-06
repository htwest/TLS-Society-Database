import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ButtonGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ModDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <ButtonGroup>
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          pos="absolute"
          top="0"
          right="11rem"
          m="1rem"
        >
          Mod Tools
        </Button>
      </ButtonGroup>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <Link to="/applicants">Applicants</Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModDrawer;
