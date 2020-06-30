import React, { useState}  from 'react';



const SearchBar = (props) => {
  const setNumberQuery = props.query;
  const setPerformQuery = props.queryFlag;
  const setSelectedOption = props.option
  const [numberInput, setNumberInput] = useState('');

  const numberOptions = [
    {
      key: "trivia",
      text: "Trivia",
      value: "trivia",
    },
    {
      key: "year",
      text: "Year",
      value: "year",
    },
    {
      key: "date",
      text: "Date",
      value: "date",
    },
    {
      key: "math",
      text: "Math",
      value: "math",
    },
  ];

  
  const readKeyInput = (event) => {
    // event.preventDefault();
    if (event.keyCode === 13) {
      setPerformQuery(true);
      setNumberQuery(numberInput);
    }
  };
  
  return (
    <div className="ui segment">
      <div className="ui form" /*onSubmit={this.onFormSubmit}*/>
        <div className="field">
          <label>Search a number</label>
          <select
            placeholder="Select"
            onChange={event => setSelectedOption(event.target.value)}
            defaultValue={numberOptions[0].value}
          >
            {numberOptions.map(option =>
            <option 
            key={option.key} 
            value={option.value}
            >
              {option.text}
            </option>

            )}
          </select>
          <input
            type="text"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            onKeyUp={readKeyInput}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
