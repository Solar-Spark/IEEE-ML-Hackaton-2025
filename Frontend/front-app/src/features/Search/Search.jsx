import React, { useState } from 'react';
import Report from '../../components/Report/Report';
import './Search.css';
import { reportMock } from './Search.models';

const Search = () => {
  const [id, setId] = useState('');
  const [report, setReport] = useState(null);

  const handleSearch = async () => {
    // Placeholder for fetching data from backend
    // const response = await fetch(`/api/report/${id}`);
    // const data = await response.json();
    const data = reportMock;
    setReport(data);
  };

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className="search-container">
      <h1>Search Report by ID</h1>
      <div className="search-form">
        <input
          type="text"
          value={id}
          onChange={handleInputChange}
          placeholder="Enter ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {report && (
        <Report report={report}/>
      )}
    </div>
  );
};

export default Search;
