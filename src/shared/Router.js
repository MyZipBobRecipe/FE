import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from '../pages/list';
import Create from '../pages/create'
import Detail from '../pages/detail';
import Login from '../pages/login';
import Signup from '../pages/signup';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/api/postlist' element={<List />} />
        <Route path='/api/postlist/create' element={<Create />} />
        <Route path='/api/postlist:postId' element={<Detail />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
