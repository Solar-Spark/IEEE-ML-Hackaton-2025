// src/App.js

import React from 'react';
import TenderTable from './components/TenderTable';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <TenderTable />
      <div style={{ marginTop: '50px' }}>
        <PieChart />
      </div>
    </div>
  );
}

export default App;