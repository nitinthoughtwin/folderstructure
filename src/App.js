import React, {useState} from 'react';
import { Container } from "@mui/material";
import contextApi from "./context/contextApi";
import { RoutesLink } from "./Routes";

function App() {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const value = { isLoginUser, setIsLoginUser };
  return (

    <Container maxWidth="sm">
      <contextApi.Provider value={value}>
        <RoutesLink />
      </contextApi.Provider>  
    </Container>
  );
}

export default App;
