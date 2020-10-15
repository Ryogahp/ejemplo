import React, { useState } from "react";
import { Doughnut, Bar, Radar, Pie } from "react-chartjs-2";
import { merge } from "lodash";

const Graficas = () => {
  const [charData, setCharData] = useState({
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Ventas por dia",
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: [
          "rgba(75,192,192,0.6)", // Este es para lunes
          "rgba(100,19,172,0.6)", // Este es para martes
          "rgba(75,192,19,0.2)", // Este es para miercoles
          "rgba(75,92,92,0.9)", // Este es para jueves
          "aliceblue", // Este es para viernes
          "yellow", // Este es para sabado
          "green", // Este es para domingo
        ],
      },
    ],
  });

  // No necesitas esto. En vez, declara el estado inicial.
  // useEffect(() => {
  //  chart();
  // }, []);

  // Es mejor que los nombres de funciones sean verbos, no sustantivos
  // const cambiarDatos = () => {
  //   var nuevo = [];
  //   document
  //     .getElementById("inputfile")
  //     .addEventListener("change", function () {
  //       var fr = new FileReader();
  //       fr.onload = function () {
  //         document.getElementById("output").textContent = fr.result;
  //         console.log(fr.result.split(","));
  //         const arrStr = fr.result.split(",");
  //         nuevo = arrStr.map((i) => Number(i));
  //         console.log(nuevo);
  //       };
  //       console.log(nuevo);
  //       fr.readAsText(this.files[0]);
  //     });
  //     console.log(nuevo);

  //   // setCharData cambia todo el objecto, asi que tienes que clonarlo o volver a construirlo.
  //   // Usa merge para unir los objectos (https://lodash.com/docs/4.17.15#merge).
  //   const objectoNuevo = {
  //     ...charData, // Esto se llama operador rest (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  //     datasets: merge(charData.datasets, [
  //       {
  //         data: nuevo,//
  //       },
  //     ]),
  //   };

  //   setCharData(objectoNuevo);
  // };
  const cambiarDatos = () => {
    // setCharData cambia todo el objecto, asi que tienes que clonarlo o volver a construirlo.
    // Usa merge para unir los objectos (https://lodash.com/docs/4.17.15#merge).
    const objectoNuevo = {
      ...charData, // Esto se llama operador rest (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
      datasets: merge(charData.datasets, [
        {
          data: [
            Math.random() * 1,
            Math.random() * 2,
            Math.random() * 3,
            Math.random() * 4,
            Math.random() * 5,
            Math.random() * 6,
            Math.random() * 7
          ]
        }
      ])
    };

    setCharData(objectoNuevo);
  };
  return (
    <>
      <h1>Diagrama</h1>
      <div className="row">
        <div className="col-6">
          <Doughnut
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <div className="col-6">
          <Bar
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Radar
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <div className="col-6">
          <Pie
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>

        {/* <div>
          <input
            type="file"
            name="inputfile"
            id="inputfile"
            onClick={cambiarDatos}
          />
          <br />
          <pre id="output"></pre>
        </div> */}
      </div>
      <button onClick={cambiarDatos}> Cambiar Dato</button>
    </>
  );
};

export default Graficas;
