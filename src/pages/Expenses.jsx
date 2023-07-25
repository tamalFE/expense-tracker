import { useState } from 'react';
import CustomForm from '../components/CustomForm';
import Layout from '../layout/Layout';
import CustomTable from '../components/CustomTable';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const handleUpdateExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <Layout>
      <CustomForm type="Expense" onUpdateHead={handleUpdateExpense} />
      <h3 className="text-2xl text-center my-3">
        Total: Tk.
        {expenses.reduce((acc, crr) => Number(acc) + Number(crr.amount), 0)}
      </h3>
      <CustomTable data={expenses} />
    </Layout>
  );
};

export default Expenses;
