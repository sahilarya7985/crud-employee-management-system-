import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
        <a
          className="navbar-brand fw-bold text-uppercase"
          href="/"
        >
          Employee Management System
        </a>

        <div className="ms-auto">
          <span className="text-light small">
            Spring Boot + React
          </span>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

