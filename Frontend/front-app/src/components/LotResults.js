// src/components/LotResults.js

import React from 'react';
import '../styles/LotResults.css'; // Импортируем стили

const LotResults = ({ lots }) => {
  if (!lots || lots.length === 0) {
    return <p className="no-results">Нет результатов</p>;
  }

  return (
    <div className="results-container">
      <h3>Результаты поиска</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>ID Лота</th>
            <th>Наименование</th>
            <th>Дата публикации</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => (
            <tr key={lot.id}>
              <td>{lot.id}</td>
              <td>{lot.name}</td>
              <td>{lot.publicationDate}</td>
              <td>{lot.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LotResults;