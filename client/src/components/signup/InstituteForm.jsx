import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

// Hooks
// import validateForm from "../../hooks/validateForm";

const InstituteForm = ({ institute, setInstitute }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Institute</FormLabel>
        <Input
          type="text"
          name="institute"
          placeholder="Name of Institute"
          value={institute.institute}
          autoComplete="off"
          size="lg"
          onChange={(e) =>
            setInstitute({ ...institute, institute: e.target.value })
          }
        />
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Semester</FormLabel>
        <Select
          placeholder="Select Semester"
          value={institute.semester}
          onChange={(e) =>
            setInstitute({ ...institute, semester: e.target.value })
          }
        >
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
        </Select>
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Point of Contact</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="name"
              value={institute.poc_name}
              placeholder="Full Name"
              autoComplete="off"
              size="lg"
              onChange={(e) =>
                setInstitute({ ...institute, poc_name: e.target.value })
              }
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="email"
              value={institute.poc_email}
              placeholder="Email"
              autoComplete="off"
              size="lg"
              onChange={(e) =>
                setInstitute({ ...institute, poc_email: e.target.value })
              }
            />
          </GridItem>
        </Grid>
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Application Deadlines</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Text>Start</Text>
            <Input
              size="lg"
              type="datetime-local"
              value={institute.app_open}
              onChange={(e) =>
                setInstitute({ ...institute, app_open: e.target.value })
              }
            />
          </GridItem>
          <GridItem>
            <Text>End</Text>
            <Input
              size="lg"
              type="datetime-local"
              value={institute.app_deadline}
              onChange={(e) =>
                setInstitute({ ...institute, app_deadline: e.target.value })
              }
            />
          </GridItem>
        </Grid>
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="desc"
          placeholder="Please provide a short description..."
          value={institute.description}
          autoComplete="off"
          size="lg"
          onChange={(e) =>
            setInstitute({ ...institute, description: e.target.value })
          }
        />
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>
    </>
  );
};

export default InstituteForm;
