import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/users/SideMenu';
import UserHeader from '../../components/users/UserHeader';


const UserLayout = () => {
    return (
        <div>
            <UserHeader/>
            <div id='admin'>
                <div id='side-menu'> <SideMenu/> </div>
                <div id='admin_body'> <Outlet/> </div>
            </div>
        </div>
    );
};

export default UserLayout;