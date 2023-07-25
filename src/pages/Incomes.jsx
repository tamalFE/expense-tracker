import { useState } from 'react';
import CustomForm from '../components/CustomForm';
import Layout from '../layout/Layout';
import CustomTable from '../components/CustomTable';

const Incomes = () => {
  const [incomes, setIncomes] = useState([]);

  const handleUpdateIncomes = (income) => {
    setIncomes((prev) => [...prev, income]);
  };

  return (
    <Layout>
      <CustomForm type="Income" onUpdateHead={handleUpdateIncomes} />
      <h3 className="text-2xl text-center my-3">
        Total: Tk.
        {incomes.reduce((acc, crr) => Number(acc) + Number(crr.amount), 0)}
      </h3>
      <CustomTable data={incomes} />
    </Layout>
  );
};

export default Incomes;
