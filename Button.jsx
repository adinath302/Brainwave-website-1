import React, { Children } from "react";

const Button = ({ classname, href, onClick, children, px, white }) => {
  const renderButton = () => (
    <button>
      <span>{children}</span>
    </button>
  );
};

export default Button;
