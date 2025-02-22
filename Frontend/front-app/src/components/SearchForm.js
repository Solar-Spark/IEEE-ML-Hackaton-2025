// src/components/SearchForm.js

import React, { useState } from 'react';
import '../styles/SearchForm.css'; // Импортируем стили

const SearchForm = ({ onSearch }) => {
  const [ensCode, setEnsCode] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Включаем анимацию загрузки
    try {
      await onSearch(ensCode); // Выполняем поиск
    } catch (error) {
      console.error('Ошибка при поиске:', error);
    } finally {
      setIsLoading(false); // Отключаем анимацию загрузки
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <h3>Поиск лотов по коду ЕНС ТРУ</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Введите код ЕНС ТРУ"
            value={ensCode}
            onChange={(e) => setEnsCode(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={isLoading}>
            {isLoading ? (
              <div className="loading-spinner"></div> // Анимация загрузки
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M5 12l14 0" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;