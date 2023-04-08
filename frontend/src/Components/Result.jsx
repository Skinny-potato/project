import { Table, Thead, Tbody, Tr, Th, Td, Link, Button } from "@chakra-ui/react";
import { useLocation ,useNavigate} from "react-router-dom";
import { ArrowBackIcon} from '@chakra-ui/icons'
import "../Styles/ResultTable.css";

const ResultTable = ({ data }) => {

  return (
    <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
      <Thead>
        <Tr>
          <Th fontSize="md" fontWeight="bold" color="gray.700">
            URL
          </Th>
          <Th fontSize="md" fontWeight="bold" color="gray.700">
            Score
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(data).map(([url, score]) => (
          <Tr key={url}>
            <Td fontSize="sm" color="gray.700">
              <Link href={url} isExternal>
                {url}
              </Link>
            </Td>
            <Td fontSize="sm" color="gray.700">
              {score.toFixed(3)}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Result = () => {
  const location = useLocation();
  const finalResult = location.state?.data; // accessing the data prop from the location state object
  let finalError;
  let sortedData

  console.log(finalResult, typeof finalResult);

  if (typeof finalResult === "string") {
    finalError=finalResult
    console.log(finalError);
  } else {
    sortedData = Object.fromEntries(
      Object.entries(finalResult).sort(([, a], [, b]) => b - a)
    );
    console.log(sortedData);
  }
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate("/services")
  }
  // const data = {
  //   "https://www.space.com/17661-theory-general-relativity.html": 3.2753326509723646,
  //   "https://en.wikipedia.org/wiki/History_of_general_relativity": 0.4498260846823757,
  //   "https://www.f.waseda.jp/sidoli/Einstein_Relativity.pdf": 0.033752248958113844,
  // };


  return (
    <>
      {sortedData ? (
        <div id="result_container">
          <p className="data">Test result : Plagarism Found </p>
          <ResultTable data={sortedData} />
          <Button  onClick={handleBack}>  < ArrowBackIcon/></Button>
        </div>
      ) : (
        <div id="error_container">

        <p className="data">Test Result : {finalError}</p>
        <Button  onClick={handleBack}>  < ArrowBackIcon/></Button>
        
        </div>
      )}
    </>
  );
};

export default Result;
