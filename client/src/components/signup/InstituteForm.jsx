import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

// Hooks
// import validateForm from "../../hooks/validateForm";

const InstituteForm = () => {
  const [err, setErr] = useState();
  const [institute, setInstitute] = useState();
  const [semester, setSemeseter] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState();
  const [deadline, setDeadline] = useState();
  const [desc, setDesc] = useState();

  return (
    <>
      <FormControl>
        <FormLabel>Institute</FormLabel>
        <Input
          type="text"
          name="institute"
          placeholder="Enter Password"
          value={institute}
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Semester</FormLabel>
        <Select placeholder="Select Semester">
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
        </Select>
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Point of Contact</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              autoComplete="off"
              size="lg"
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              autoComplete="off"
              size="lg"
            />
          </GridItem>
        </Grid>
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default InstituteForm;
