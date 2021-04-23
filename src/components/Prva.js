import React, { useState } from "react";

const Prva = () => {
  const [ime, setIme] = useState("Sanja");

  const promijeniPozdrav = () => {
    if (ime == "Sanja") setIme("Ivana");
    else setIme("Sanja");
  };

  return (
    <>
      <h1>Algebrina stranica</h1>
      <p>Dobrodošla {ime}</p>
      <button onClick={() => promijeniPozdrav()}>Promijeni pozdrav</button>
    </>
  );
};

export default Prva;
