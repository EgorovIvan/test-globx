import React, {useEffect, useRef, useState} from "react";
import './UI/scss/style.scss';
import Card from "./UI/Card";
import axios from 'axios';

function App() {
  
  const [usersData, setUsersData] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  
  // функция поиска
  const handleSearch = () => {
    setSearchQuery(inputRef.current.value);
  }
  
  useEffect(() => {
    
    // запрос на сервер без параметров
    if(!searchQuery) {
      const apiUrl = 'http://localhost:3000';
      axios.get(apiUrl).then((resp) => {
        const users = resp.data;
        setUsersData(users);
      });
      
      // запрос на сервер с параметрами
    } else {
      const apiUrl = `http://localhost:3000?term=${searchQuery}`;
      axios.get(apiUrl).then((resp) => {
        const users = resp.data;
        setUsersData(users);
      });
    }
  }, [setUsersData, searchQuery]);
  
  return (
    <div className="main">
      
      <div className="search">
        
        <input type="text" className="search__input" ref={inputRef} onChange={e => setSearchQuery(e.target.value)}
               value={searchQuery}/>
        
        <svg className="search__icon" onClick={handleSearch} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.8033 13.8033C10.8744 16.7322 6.12563 16.7322 3.1967 13.8033C0.267767 10.8744 0.267767 6.12563 3.1967 3.1967C6.12563 0.267767 10.8744 0.267767 13.8033 3.1967C16.7322 6.12563 16.7322 10.8744 13.8033 13.8033ZM14.1457 14.8545C10.8078 17.8256 5.69007 17.7109 2.48959 14.5104C-0.829864 11.191 -0.829864 5.80905 2.48959 2.48959C5.80905 -0.829864 11.191 -0.829864 14.5104 2.48959C17.7115 5.69065 17.8256 10.8097 14.8529 14.1475L19.4605 18.7551C19.6558 18.9504 19.6558 19.267 19.4605 19.4622C19.2653 19.6575 18.9487 19.6575 18.7534 19.4622L14.1457 14.8545Z" fill="#432EAB"/>
        </svg>
        
      </div>
      
      <div className="main__users-list">
        { !usersData
          ? 'Загрузка...'
          : Array.from(usersData).map((user, index) => <Card key={index} {...user}/>)}
      </div>
    </div>
  );
}


export default App;
