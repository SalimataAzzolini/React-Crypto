import React from 'react';

const UserHeader = () => {
    return (
        <div>
             <header className="header_admin">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <h2> Header USER</h2>
          <ul className="navbar-nav mr-auto" id="ul-nav">
        
        {/*    <button onClick={logout} type="button" className="btn btn-dark"> Logout</button> */}
        <button  type="button" className="btn btn-dark"> Logout</button>
          </ul>
          
        </div>
      </nav>
    </header>
        </div>
    );
};

export default UserHeader;