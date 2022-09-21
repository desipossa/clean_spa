import React from 'react';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Board from './pages/Board';
import Footer from './pages/Footer';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/basic.scss';

const url = 'https://api.github.com/users'

const App = () => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    const res = await axios.get(url);
    setUser(res.data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <Wrapper>
      <Header />
      {console.log(user)}
      <Routes>
        <Route path='/' element={<Main user={user} />} />
        <Route path='/sub01' element={<Sub01 />} />
        <Route path='/sub02' element={<Sub02 />} />
        <Route path='/sub03' element={<Sub03 />} />
        <Route path='/sub04' element={<Sub04 />} />
        <Route path='/board' element={<Board />} />
        <Route path='/detail/:id' element={<Detail user={user} />} />
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App;