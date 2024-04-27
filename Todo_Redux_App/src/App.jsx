import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";
import { Box } from "@chakra-ui/react";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"teal"}
        borderRadius={"5px"}
        padding={"10px"}
        w={"98%"}
        m={"10px auto"}
        color={"white"}
      >
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/login">Login </Link>
        <Theme />
      </Box>
      <AllRoutes />
    </>
  );
}

export default App;
