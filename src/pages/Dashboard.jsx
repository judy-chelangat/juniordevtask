import React, { useState, useEffect } from 'react';
import SideNav from '../components/SideNav';
import Counters from '../components/Counters';
import Graphs from '../components/Graphs';
import axios from 'axios';

const Dashboard = () => {
  const [collections, setCollections] = useState(0);
  const [signups, setSignups] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [bouncedCheques, setBouncedCheques] = useState(0);

  useEffect(() => {
    axios.get('https://sales-dashboard-mjen.onrender.com/dashboard-metrics').then((response) => {
      const data = response.data;
      setCollections(data.collections);
      setSignups(data.signups);
      setRevenue(data.revenue);
      setBouncedCheques(data.bouncedCheques);
    });
  }, []);

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
        <Counters
          collections={collections}
          signups={signups}
          revenue={revenue}
          bouncedCheques={bouncedCheques}
        />
        <Graphs />
      </div>
    </div>
  );
};

export default Dashboard;
