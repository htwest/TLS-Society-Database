import React, { Fragment, useState } from "react";

// Components
import Login from "./Login";

const Home = () => {
  const [user, setUser] = useState({});

  return (
    <Fragment>
      <Login setUser={setUser} />
    </Fragment>
  );
};

export default Home;
