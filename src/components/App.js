import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Number from "./Number";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [numberQuery, setNumberQuery] = useState("");
  const [numberTrivia, setNumberTrivia] = useState("");
  const [performQuery, setPerformQuery] = useState(false);

  // eslint-disable-next-line 
  useEffect(() => {
    if (performQuery) {
      async function onSearchSubmit() {
        const url = "http://numbersapi.com/";
        const response = await axios.get(
          `${url}${numberQuery}/${selectedOption}`
        );
        setNumberTrivia(response.data);
        console.log("Performing query...");
        console.log(numberQuery);
        console.log(selectedOption);
      }
      onSearchSubmit();
      setPerformQuery(false);
    }
  }, [performQuery]);

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar
        query={setNumberQuery}
        queryFlag={setPerformQuery}
        option={setSelectedOption}
      />
      <Number number={numberTrivia} />
    </div>
  );
};

export default App;

