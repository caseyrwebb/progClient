import { useState, useContext } from "react";
import ProgContext from "../util/ProgContext";
import Paper from "@material-ui/core/Paper";
import { FiPhoneCall } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";
import { GrSystem } from "react-icons/gr";

function ProgBox(props) {
  const { table, setTable } = useContext(ProgContext);
  const { data } = props;

  const handleClick = () => {
    setTable(data);
  };

  return (
    <Paper
      style={{
        backgroundColor: "#fff",
        marginTop: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "6em",
        paddingTop: "1em",
      }}
      elevation={2}
      onClick={handleClick}
    >
      {(() => {
        switch (data) {
          case "calls":
            return <FiPhoneCall style={{ fontSize: "3em" }} />;
          case "capabilities":
            return <FaTools style={{ fontSize: "3em" }} />;
          case "network":
            return <BiNetworkChart style={{ fontSize: "3em" }} />;
          case "peripherals":
            return <ImHeadphones style={{ fontSize: "3em" }} />;
          case "systemInfo":
            return <GrSystem style={{ fontSize: "3em" }} />;
          default:
            return <FaTools style={{ fontSize: "3em" }} />;
        }
      })()}
      <p>{data}</p>
    </Paper>
  );
}

export default ProgBox;
