import React, { useState } from 'react';

const CollectionForm = ({ invoiceId, onClose }) => {
  const [collection, setCollection] = useState({
    collectionNumber: '',
    date: '',
    amount: '',
    status: 'Valid',
    invoiceId: invoiceId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollection(prevCollection => ({
      ...prevCollection,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(' https://sales-dashboard-mjen.onrender.com/collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(collection)
      });
      if (response.ok) {
        onClose();
      } else {
        console.error('Error occurred while processing the request');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label className="block mb-2">Collection Number</label>
        <input
          type="text"
          name="collectionNumber"
          value={collection.collectionNumber}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={collection.date}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amount</label>
        <input
          type="number"
          name="amount"
          value={collection.amount}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <select
          name="status"
          value={collection.status}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        >
          <option value="Valid">Valid</option>
          <option value="Bounced">Bounced</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Collection
      </button>
      <button type="button" onClick={onClose} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </form>
  );
};

export default CollectionForm;
