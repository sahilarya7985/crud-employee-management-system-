import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div>
        © {new Date().getFullYear()} CRUD Application by Sahil Maurya
      </div>
     
    </footer>
  );
};

export default FooterComponent;
