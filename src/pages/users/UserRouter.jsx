import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { UserLayout, DashboardUser } from "../../pages/users";
import Error from '../../_utils/Error';

const UserRouter = () => {
    return (
        <div>
            <Routes>
            <Route element={<UserLayout/>}>
                <Route index element={<DashboardUser/>} /> 
                <Route path='dashboard' element={<DashboardUser/>}/>

              {/*<Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UserEdit/>}/> 
                    <Route path="add" element={<UserAdd/>}/>
                </Route> */}
           
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
        </div>
    );
};

export default UserRouter;