import React from "react";

export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          Copyright &copy; {getYear()} KlikDokter (Gaga). All rights reserved.
        </p>
      </div>
    </div>
  );
};
