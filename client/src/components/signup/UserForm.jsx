import React from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

// Hooks
// import validateForm from "../../hooks/validateForm";

const UserForm = ({ userData, setUserData }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="user_name"
          value={userData.username}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={userData.password}
          autoComplete="off"
          size="lg"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Name</FormLabel>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input
              type="text"
              name="first_name"
              value={userData.fName}
              placeholder="First"
              autoComplete="off"
              size="lg"
              onChange={(e) =>
                setUserData({ ...userData, fName: e.target.value })
              }
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="last_name"
              value={userData.lName}
              placeholder="Last"
              autoComplete="off"
              size="lg"
              onChange={(e) =>
                setUserData({ ...userData, lName: e.target.value })
              }
            />
          </GridItem>
        </Grid>
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={userData.email}
          autoComplete="off"
          size="lg"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        {/* <FormErrorMessage>{err}</FormErrorMessage> */}
      </FormControl>
    </>
  );
};

export default UserForm;
