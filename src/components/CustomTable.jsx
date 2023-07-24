const CustomTable = ({ data }) => {
  return (
    <div className="container mx-auto max-w-3xl overflow-x-auto mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Head</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ text, amount }, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{text}</td>
              <td>tk. {amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
