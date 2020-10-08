import React, { useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setMonsters([...monsters]));
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox
        value={searchField}
        placeholder='search monsters'
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
