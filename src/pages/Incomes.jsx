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
      <CustomTable data={incomes} />
    </Layout>
  );
};

export default Incomes;
