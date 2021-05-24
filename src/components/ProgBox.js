import { useState, useContext } from "react";
import ProgContext from "../util/ProgContext";
import MyBubble from "./MyBubble";
import Paper from "@material-ui/core/Paper";
import { FiPhoneCall } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { ImHeadphones } from "react-icons/im";
import { GrSystem } from "react-icons/gr";

function ProgBox(props) {
  const { table, setTable } = useContext(ProgContext);
  const { title, data } = props;

  const handleClick = () => {
    if (table === title) {
      setTable(null);
    } else setTable(title);
  };

  //Styles are for detecting if current box is active.
  const activeStyle = {
    backgroundColor: "#fff",
    border: "thick solid #e1eded",
    marginTop: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "6em",
    paddingTop: "1em",
  };

  const inactiveStyle = {
    backgroundColor: "#fff",
    marginTop: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "6em",
    paddingTop: "1em",
  };

  const boxStyle = table === title ? activeStyle : inactiveStyle;

  return (
    <Paper style={boxStyle} elevation={2} onClick={handleClick}>
      {(() => {
        switch (title) {
          case "calls":
            return <MyBubble title={title} data={data} />;
          case "systemInfo":
            return <MyBubble title={title} data={data} />;
          default:
            return null;
        }
      })()}
      {(() => {
        switch (title) {
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
      <p>{title.slice(0, 1).toUpperCase() + title.slice(1, title.length)}</p>
    </Paper>
  );
}

export default ProgBox;
