import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Register from './Register';
import PublicLayout from './PublicLayout';
import Error from '../../_utils/Error';


const PublicRouter = () => {
    return (
        <div>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
        </div>
    );
};

export default PublicRouter;