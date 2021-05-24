import { useState } from "react";
import "./Table.css";
import Paper from "@material-ui/core/Paper";
import { AiFillQuestionCircle } from "react-icons/ai";

function DialogueBox() {
  const [hover, setHover] = useState(false);

  const MouseOver = () => {
    setHover(!hover);
  };
  const MouseOut = () => {
    setHover(!hover);
  };

  return (
    <>
      {hover && (
        <div style={{ position: "relative" }}>
          <Paper
            style={{
              backgroundColor: "#fff",
              position: "absolute",
              left: "3em",
              bottom: "0.25em",
              paddingLeft: "1em",
              paddingRight: "1em",
            }}
            elevation={3}
          >
            <p>
              This Data Was Not Returned. If Expected, Please Ignore. Otherwise,
              Check Messages.
            </p>
          </Paper>
        </div>
      )}
      N/A{" "}
      <AiFillQuestionCircle
        style={{ color: "grey" }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      />
    </>
  );
}

function MyTable(props) {
  const { data } = props;

  return (
    <div>
      <table className="table table-bordered table-condensed table-sm">
        <tbody>
          {Object.keys(data).map((k) => (
            <tr key={k}>
              {!Array.isArray(data) && k !== "$t" && (
                <td
                  className="font-weight-bold bg-light text-uppercase"
                  width="20%"
                >
                  {k.replace(/_/g, " ")}
                </td>
              )}
              {(() => {
                if (
                  data[k] &&
                  typeof data[k] === "object" &&
                  Object.keys(data[k]).length === 0
                ) {
                  return (
                    <td width="80%">
                      <DialogueBox />
                    </td>
                  );
                } else if (data[k] && typeof data[k] === "object") {
                  return (
                    <td width="80%">
                      <MyTable data={data[k]} />
                    </td>
                  );
                } else return <td width="80%">{data[k]}</td>;
              })()}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
