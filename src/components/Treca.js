import React from "react";
import Pjesma from "./Pjesma";

let init = true;

const Treca = () => {
  // const [ListaPjesama, setListaPjesama] = React.useState([
  //   [
  //     "Ako Te Pitaju",
  //     "http://cdn-images.dzcdn.net/images/cover/2296149a4e0e5f1d42416ad2a1892a6e/56x56-000000-80-0-0.jpg",
  //   ],
  //   [
  //     "Moje Zlato",
  //     "http://cdn-images.dzcdn.net/images/artist/2b0408001681f594be1d78ef91716550/56x56-000000-80-0-0.jpg",
  //   ],
  // ]);
  const [ListaPjesama, setListaPjesama] = React.useState([]);
  // https://api.lyrics.ovh/suggest/${searchTerm}
  const noviUpit = (event, searchTerm = "moje") => {
    if (event) {
      searchTerm = event.target.value;
    }

    fetch(`https://api.lyrics.ovh/suggest/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => data.data)
      .then((podaci) => {
        let novoStanje = podaci.map((clan) => {
          return [clan.title, clan.album.cover];
        });
        console.log("Iscrtavam novo stanje");
        setListaPjesama(novoStanje);
      });
  };

  const izbaci = (kljuc) => {
    setListaPjesama(ListaPjesama.filter((pjesma, index) => index !== kljuc));
  };

  // if (init) {
  //   init = false;
  //   noviUpit();
  // }

  return (
    <div>
      <input type='text' onChange={(event) => noviUpit(event)}></input>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
        {ListaPjesama.map((pjesma, index) => {
          return (
            <Pjesma
              key={index}
              slika={pjesma[1]}
              naziv={pjesma[0]}
              funkcija={(kljuc) => izbaci(kljuc)}
              param={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Treca;
