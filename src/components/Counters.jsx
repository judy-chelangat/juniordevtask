import React from 'react';

const Counters = ({ collections, signups, revenue, bouncedCheques }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Collections</h3>
      <p className="text-3xl">{collections}</p>
    </div>
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Sign-ups</h3>
      <p className="text-3xl">{signups}</p>
    </div>
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
      <p className="text-3xl">{revenue}</p>
    </div>
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-2">Bounced Cheques</h3>
      <p className="text-3xl">{bouncedCheques}</p>
    </div>
  </div>
);

export default Counters;
