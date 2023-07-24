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
      <CustomTable data={expenses} />
    </Layout>
  );
};

export default Expenses;
