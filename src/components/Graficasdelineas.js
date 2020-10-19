import React, { useState } from "react";
import { Doughnut, Bar, Radar, Pie } from "react-chartjs-2";
import { merge } from "lodash";
import { Form } from "react-bootstrap";

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
        data: [1, 2, 3, 4, 5, 12, 7],
        backgroundColor: [
          "rgba(75,192,192,0.12)",
          "rgba(100,19,172,0.12)",
          "rgba(75,192,19,0.2)",
          "rgba(75,92,92,0.9)",
          "aliceblue",
          "yellow",
          "green",
        ],
      },
    ],
  });

  const cambiarDatos = (e) => {
    console.log(e);
    let nuevo = [];
    document
      .getElementById("inputfile")
      .addEventListener("change", function () {
        var fr = new FileReader();

        fr.onload = function () {
          document.getElementById("output").textContent = fr.result;
          //console.log(fr.result.split(","));
          var arrStr = fr.result.split(",");
          nuevo = arrStr.map((i) => Number(i));
          //console.log(nuevo);

          const objectoNuevo = {
            ...charData,
            datasets: merge(charData.datasets, [
              {
                data: nuevo, //
              },
            ]),
          };

          setCharData(objectoNuevo);
        };

        fr.readAsText(this.files[0]);
      });
  };

  return (
    <>
      <h1>Diagrama</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <Doughnut
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <div className="col-12 col-md-6">
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
        <div className="col-12 col-md-6">
          <Radar
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <Pie
            key={JSON.stringify(charData.datasets[0].data)}
            data={charData}
            options={{
              responsive: true,
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Form.File
          type="file"
          name="inputfile"
          id="inputfile"
          onClick={cambiarDatos}
        />
        <br />
        <pre id="output"></pre>
        </div>
      </div>
    </>
  );
};

export default Graficas;
