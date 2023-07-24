import { useState } from 'react';

const CustomForm = (props) => {
  const { type, onUpdateHead } = props;
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '' || amount <= 0) return;

    const newHead = { text, amount };
    onUpdateHead(newHead);

    setText('');
    setAmount(0);
  };

  return (
    <form className="text-center p-2" onSubmit={handleSubmit}>
      <h3 className="my-2 text-2xl">New {type}</h3>
      <input
        className="input input-bordered w-full max-w-xs mr-2"
        type="text"
        value={text}
        placeholder={`${type === 'Income' ? 'Source' : 'Purpose'} of money`}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="input input-bordered w-full max-w-xs mr-2"
        type="number"
        min={0}
        value={amount}
        placeholder="Amount of money"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="btn btn-accent">
        Add Transaction
      </button>
    </form>
  );
};

export default CustomForm;
