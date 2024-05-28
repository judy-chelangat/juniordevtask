import React, { useEffect, useState } from 'react';
import InvoiceForm from './InvoiceForm';

const InvoicesList = ({ schoolId }) => {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(`http://localhost:4000/invoices?schoolId=${schoolId}`);
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, [schoolId]);

  const handleAddInvoice = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Invoices</h2>
      <button onClick={handleAddInvoice} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Invoice
      </button>
      {showForm && <InvoiceForm schoolId={schoolId} onClose={handleFormClose} />}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Invoice Number</th>
            <th className="py-2 px-4 border-b">Item</th>
            <th className="py-2 px-4 border-b">Creation Date</th>
            <th className="py-2 px-4 border-b">Due Date</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Paid Amount</th>
            <th className="py-2 px-4 border-b">Balance</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td className="py-2 px-4 border-b">{invoice.invoiceNumber}</td>
              <td className="py-2 px-4 border-b">{invoice.item}</td>
              <td className="py-2 px-4 border-b">{invoice.creationDate}</td>
              <td className="py-2 px-4 border-b">{invoice.dueDate}</td>
              <td className="py-2 px-4 border-b">{invoice.amount}</td>
              <td className="py-2 px-4 border-b">{invoice.paidAmount}</td>
              <td className="py-2 px-4 border-b">{invoice.balance}</td>
              <td className="py-2 px-4 border-b">{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesList;
