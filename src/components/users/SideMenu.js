import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { Link } from 'react-router-dom';

import './side-menu.css';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <Sider> 
             <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>

                <li><Link to="/dashboard">Dashboard</Link></li>
                
           </ul>

           </Sider>
        </div>
    );
};

export default SideMenu;