import "./Table.css";

function MyTable(props) {
  const { data } = props;
  return (
    <div>
      <table className="table table-bordered table-condensed table-sm">
        <tbody>
          {Object.keys(data).map((k) => (
            <tr key={k}>
              {!Array.isArray(data) && (
                <td
                  className="font-weight-bold bg-light text-uppercase"
                  width="20%"
                >
                  {/* Convert snake to space and capitalize for visual */}
                  {k.replace(/_/g, " ")}
                </td>
              )}
              {(() => {
                if (data[k] && typeof data[k] === "object") {
                  return (
                    <td width="80%">
                      <MyTable data={data[k]} />
                    </td>
                  );
                }
                return <td width="80%">{data[k]}</td>;
              })()}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
