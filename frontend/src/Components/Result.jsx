import React, { useContext } from "react";
import { DataContext } from "../Assets/TextUpload";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Result = () => {
  const data = useContext(DataContext);
  const objectData = {
    "https://www.space.com/17661-theory-general-relativity.html": 7.997189037245256,
    "https://en.wikipedia.org/wiki/Introduction_to_general_relativity": 0.2144452717795979,
    "https://www.f.waseda.jp/sidoli/Einstein_Relativity.pdf": 0.0337522489527177,
  };

  return (
    <div style={{ minHeight: "80vh", margin: "8rem" }}>
      <h1 style={{ marginBottom: "30px" }}>
        Plagarism Found, the data might have been from the below links
      </h1>
      <Table variant="striped" colorScheme="teal" style={{ height: "40vh" }}>
        <Thead>
          <Tr>
            <Th>URL</Th>
            <Th>Similarity (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(objectData).map(([url, similarity]) => (
            <Tr key={url}>
              <Td>  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></Td>
              <Td>{similarity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Result;
