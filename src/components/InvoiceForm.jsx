import React, { useState } from 'react';

const InvoiceForm = ({ schoolId, onClose }) => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: '',
    item: '',
    creationDate: '',
    dueDate: '',
    amount: '',
    paidAmount: '',
    balance: '',
    status: 'Pending',
    schoolId: schoolId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice(prevInvoice => ({
      ...prevInvoice,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
      });
      if (response.ok) {
        onClose();
      } else {
        console.error('Error adding invoice');
      }
    } catch (error) {
      console.error('Error adding invoice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label className="block mb-2">Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          value={invoice.invoiceNumber}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Item</label>
        <input
          type="text"
          name="item"
          value={invoice.item}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Creation Date</label>
        <input
          type="date"
          name="creationDate"
          value={invoice.creationDate}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={invoice.dueDate}
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
          value={invoice.amount}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Paid Amount</label>
        <input
          type="number"
          name="paidAmount"
          value={invoice.paidAmount}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Balance</label>
        <input
          type="number"
          name="balance"
          value={invoice.balance}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <select
          name="status"
          value={invoice.status}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Invoice
      </button>
    </form>
  );
};

export default InvoiceForm;
