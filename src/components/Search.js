import React, { useState, useEffect } from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import History from './History';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'series', text: 'Series', value: 'series' },
  { key: 'calendars', text: 'Calendars', value: 'calendars' },
  { key: 'illustrations', text: 'Illustrations', value: 'illustrations' },
  { key: 'announcements', text: 'Announcements', value: 'announcements' },
  { key: 'countdowns', text: 'Countdowns', value: 'countdowns' },
]

const Search = (location) => {

  {/* state */}
  const [searchTerm, setSearchTerm] = useState('');
  const [input, setInput] = useState('');
  const [type, setType] = useState('All');
  const [showMenu, setShowMenu] = useState(false);

  {/* do on form submit */}
  const submitAction = (e) => {
    e.preventDefault();
    if (type != 'All') {
      History.push('/?type=' + type + '&keyword=' + input);
    } else if (type === 'All') {
      History.push('/?keyword=' + input);
    }

    setInput('');
  }

  return (

  <form onSubmit={submitAction}>
    <Input type='text' placeholder='Search any keyword' action>
      <Select button options={options} defaultValue='all' onChange={(e) => setType(e.target.textContent)} />
      <input type="text" placeholder="Search any keyword" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button type='submit' className="search-submit-button"><i className="zmdi zmdi-search zmdi-hc-fw"></i></Button>
    </Input>
  </form>

  )

}

export default Search;
