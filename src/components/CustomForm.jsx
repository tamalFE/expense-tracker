const CustomForm = (props) => {
  const { type } = props;
  return (
    <form className="text-center p-2">
      <h3 className="my-2 text-2xl">New {type}</h3>
      <input
        type="text"
        placeholder={`${type === 'Income' ? 'Source' : 'Purpose'} of money`}
        className="input input-bordered w-full max-w-xs mr-2"
      />
      <input
        type="number"
        min={0}
        placeholder="Amount of money"
        className="input input-bordered w-full max-w-xs mr-2"
      />
      <button type="submit" className="btn btn-accent">
        Add Transaction
      </button>
    </form>
  );
};

export default CustomForm;
