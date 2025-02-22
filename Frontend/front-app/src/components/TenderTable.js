
import React from 'react';
import '../styles/TenderTable.css'; 

const TenderTable = () => {
  const tenders = [
    { id: 1, type: 'Type A', idNumber: '12345', country: 'USA', publication: '2023-01-01', due: '2023-02-01', title: 'Company A' },
    { id: 2, type: 'Type B', idNumber: '67890', country: 'UK', publication: '2023-01-15', due: '2023-02-15', title: 'Company B' },
    { id: 3, type: 'Type C', idNumber: '11223', country: 'Germany', publication: '2023-01-20', due: '2023-03-01', title: 'Company C' }
  ];

  return (
    <div className="container mt-5">
      <h3 className="tender-title">Tender</h3>
      <div className="row header-row" style={{ marginBottom: '20px' }}>
        <div className="col"><strong>Type</strong></div>
        <div className="col"><strong>ID</strong></div>
        <div className="col"><strong>Country</strong></div>
        <div className="col"><strong>Publication</strong></div>
        <div className="col"><strong>Due</strong></div>
        <div className="col"><strong>Title (Company name)</strong></div>
      </div>

      {tenders.map((tender) => (
        <div key={tender.id} className="row data-row" style={{ marginBottom: '10px' }}>
          <div className="col">{tender.type}</div>
          <div className="col">{tender.idNumber}</div>
          <div className="col">{tender.country}</div>
          <div className="col">{tender.publication}</div>
          <div className="col">{tender.due}</div>
          <div className="col">{tender.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TenderTable;