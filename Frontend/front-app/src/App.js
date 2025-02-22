// // // src/App.js

// import React from 'react';
// import TenderTable from './components/TenderTable';
// import PieChart from './components/PieChart';

// function App() {
//   return (
//     <div className="App">
//       <TenderTable />
//       <div style={{ marginTop: '50px' }}>
//         <PieChart />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import SearchForm from './components/SearchForm';
import LotResults from './components/LotResults';

function App() {
  const [lots, setLots] = useState([]);

  const handleSearch = async (ensCode) => {
    try {
      const response = await axios.get('https://goszakup.gov.kz/api/v1/lots', {
        headers: {
          Authorization: `Bearer 8f82885b218e9d5f53004891e3ade12d`,
        },
        params: {
          ensCode,
        },
      });

      const data = response.data.map((item) => ({
        id: item.id,
        name: item.name,
        publicationDate: item.publication_date,
        amount: item.amount,
      }));

      setLots(data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      setLots([]);
    }
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <LotResults lots={lots} />
    </div>
  );
}

export default App;