import React from "react";

const Druga = () => {
  const [listaPolaznika, setListaPolaznika] = React.useState([
    "Ivan",
    "Barbara",
  ]);

  const dodajPolaznika = () => {
    let noviPolaznik = document.getElementById("unos").value;
    setListaPolaznika((oldListaPolaznika) => {
      let novoStanje = [...oldListaPolaznika, noviPolaznik];
      return novoStanje;
    });
  };

  const izbaci = (kljuc) => {
    console.log(kljuc);
    let novoStanje = listaPolaznika.filter(
      (polaznik, index) => index !== kljuc
    );
    setListaPolaznika(novoStanje);
  };

  return (
    <div>
      <input type='text' id='unos'></input>
      <button type='button' onClick={() => dodajPolaznika()}>
        Dodaj polaznika
      </button>
      <div>
        <h4>Lista polaznika:</h4>
        <ul>
          {listaPolaznika.map((polaznik, index) => {
            return (
              <li key={index} onClick={() => izbaci(index)}>
                {polaznik}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Druga;
