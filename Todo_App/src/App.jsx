import "./App.css";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./allRoutes/AllRoutes";
import Theme from "./components/Theme";
function App() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"green"}
        color={"white"}
        borderRadius={"10px"}
        w={"99%"}
        m={"auto"}
        p={"10px"}
      >
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/login">Login</Link>
        <Theme />
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
