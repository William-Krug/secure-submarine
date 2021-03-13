import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return <Admin />;
}

export default App;
