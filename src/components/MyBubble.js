import { useState } from "react";
import Paper from "@material-ui/core/Paper";

function MyBubble({ title, data }) {
  const [callsHover, setCallsHover] = useState(false);
  const [messagesHover, setMessagesHover] = useState(false);

  const MouseOver = () => {
    if (title === "calls") setCallsHover(!callsHover);
    setMessagesHover(!messagesHover);
  };
  const MouseOut = () => {
    if (title === "calls") setCallsHover(!callsHover);
    setMessagesHover(!messagesHover);
  };

  if (title === "calls")
    return (
      <div style={{ position: "relative", width: "100%" }}>
        {callsHover && (
          <div style={{ position: "relative" }}>
            <Paper
              style={{
                backgroundColor: "#fff",
                position: "absolute",
                left: "6em",
                bottom: "0.5em",
                paddingLeft: "1em",
                paddingRight: "1em",
              }}
              elevation={3}
            >
              <p
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "inherit",
                }}
              >
                You have {typeof data === "array" ? data.length : "1"} active
                {typeof data === "array" ? " calls" : " call"}.
              </p>
            </Paper>
          </div>
        )}
        <Paper
          style={{
            backgroundColor: "#65db82",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1em",
            height: "1em",
            position: "absolute",
            bottom: "0em",
            right: "-0.25em",
          }}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <p
            style={{
              fontSize: "0.75em",
              color: "#fff",
            }}
          >
            {typeof data === "array" ? data.length : "1"}
          </p>
        </Paper>
      </div>
    );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {messagesHover && (
        <div style={{ position: "relative" }}>
          <Paper
            style={{
              backgroundColor: "#fff",
              position: "absolute",
              left: "6em",
              bottom: "0.5em",
              paddingLeft: "1em",
              paddingRight: "1em",
            }}
            elevation={3}
          >
            <p
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "inherit",
              }}
            >
              You have {data.Diagnostics.Message.length} messages. Click to
              check.
            </p>
          </Paper>
        </div>
      )}
      <Paper
        style={{
          backgroundColor: "#d94548",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1em",
          height: "1em",
          position: "absolute",
          bottom: "0em",
          right: "-0.25em",
        }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        <p style={{ fontSize: "0.75em", color: "#fff" }}>
          {data.Diagnostics.Message.length}
        </p>
      </Paper>
    </div>
  );
}

export default MyBubble;
