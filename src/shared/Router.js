import React from "react";
import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";

import List from '../pages/list';
import Create from '../pages/create'
import Detail from '../pages/detail';
import Login from '../pages/login';
import Signup from '../pages/signup';

const Router = () => {
  const { id } = useParams();

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/api/postlist' element={<List />} />
        <Route path='/article' element={<Create />} />
        <Route path='/api/postlist:id' element={<Detail />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
