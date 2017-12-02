import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDLKLJ1AN99ND vqJeW4ZpwjGDdxzPoHM9I';

const App = () => {
    return <div><SearchBar /></div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));