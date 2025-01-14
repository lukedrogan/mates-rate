import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <header className="bg-gray-100 text-gray-500 mb-4 py-4 flex align-middle">
          <div className="container flex md:justify-between justify-center">
              <div className="mx-8">
                  <Link className="text-blue-400" to="/">
                      <h1 className="m-0 text-2xl text-blue-900">Mates Rates</h1>
                  </Link>
                  <p className="m-0">Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                  {Auth.loggedIn() ? (
                      <button onClick={logout}>
                          Logout
                      </button>
                  ) : (
                    <>
                      <Link to="/login">
                          Login
                      </Link>
                      <Link className="rounded bg-yellow-500 p-2 mx-2 text-yellow-50 hover:text-red-600 hover:bg-yellow-400" to="/signup">
                          Sign Up
                      </Link>
                    </>
                  )}
              </div>
          </div>
      </header>
  );
};

export default Header;
