import "./App.css";
import { useState } from "react";
import axios from "axios";
import ProgContext from "./util/ProgContext";

import MyTable from "./components/MyTable";
import CameraTable from "./components/CameraTable";
import ProgBox from "./components/ProgBox";

function App() {
  const [progData, setProgData] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [table, setTable] = useState(null);

  const handleGetProg = async () => {
    const data = await axios.get("http://localhost:4000/prog");
    const prog = data.data;
    setProgData(prog);
    console.log(prog);
  };

  const handleDropDown = () => {
    setTable(null);
    setDropDown(!dropDown);
  };

  return (
    <div className="App">
      <ProgContext.Provider value={{ table, setTable }}>
        <button type="button" onClick={handleGetProg}>
          Get Data
        </button>
        {progData ? (
          <>
            <div
              style={{
                backgroundColor: "#e1eded",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "space-between",
                minWidth: "500px",
                width: "60%",
                paddingLeft: "1em",
                paddingRight: "1em",
                marginTop: "2em",
              }}
              onClick={handleDropDown}
            >
              <p>System Time: {progData[0].systemTime.$t}</p>
              <p>Name: {progData[0].contactInfo.Name.$t}</p>
              <p>
                Number: {progData[0].contactInfo.ContactMethod[1].Number.$t}
              </p>
              <p>Email: {progData[0].contactInfo.ContactMethod[0].Number.$t}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "60%",
                minWidth: "500px",
              }}
            >
              {dropDown &&
                Object.keys(progData[0]).map((key) =>
                  key !== "contactInfo" &&
                  key !== "systemTime" &&
                  key !== "cameras" ? (
                    <div key={key}>
                      <ProgBox title={key} data={progData[0][key]} />
                    </div>
                  ) : null
                )}
            </div>
            {table && (
              <div style={{ marginTop: "1em" }}>
                {table === "peripherals" ? (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ width: "50%", minWidth: "375px" }}>
                      <MyTable data={progData[0][table]} />
                    </div>
                    <div style={{ width: "50%", minWidth: "375px" }}>
                      <CameraTable data={progData[0].cameras} />
                    </div>
                  </div>
                ) : (
                  <MyTable data={progData[0][table]} />
                )}
              </div>
            )}
          </>
        ) : null}
      </ProgContext.Provider>
    </div>
  );
}

export default App;
