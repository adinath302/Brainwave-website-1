import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./Component/Button.jsx";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className="pt-[4.75] lg:pt[5.35rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something...
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
