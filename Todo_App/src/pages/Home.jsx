import React from "react";
import { Heading } from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <Heading as={"h3"} textAlign={"center"} mt={"1rem"}>
        Welcome to Shubham Lalwadiya's <h3>todo app via redux and json-server...</h3>
      </Heading>
    </div>
  );
}

export default Home;
