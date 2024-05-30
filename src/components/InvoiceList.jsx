import React, { useEffect, useState } from "react";
import InvoiceForm from "./InvoiceForm";
import CollectionsList from "./CollectionsList";

const InvoicesList = ({ schoolId }) => {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          `https://sales-dashboard-mjen.onrender.com/invoices?schoolId=${schoolId}`
        );
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices", error);
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

  const handleInvoiceSelect = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleEditInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowForm(true);
  };

  const handleDeleteInvoice = async (id) => {
    try {
      const response = await fetch(
        `https://sales-dashboard-mjen.onrender.com/invoices/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setInvoices(invoices.filter((invoice) => invoice.id !== id));
      } else {
        console.error("Error deleting invoice");
      }
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Invoices</h2>
      <button
        onClick={handleAddInvoice}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Invoice
      </button>
      {showForm && (
        <InvoiceForm
          schoolId={schoolId}
          invoiceData={selectedInvoice}
          onClose={handleFormClose}
        />
      )}
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
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} onClick={() => handleInvoiceSelect(invoice)}>
              <td className="py-2 px-4 border-b">{invoice.invoiceNumber}</td>
              <td className="py-2 px-4 border-b">{invoice.item}</td>
              <td className="py-2 px-4 border-b">{invoice.creationDate}</td>
              <td className="py-2 px-4 border-b">{invoice.dueDate}</td>
              <td className="py-2 px-4 border-b">{invoice.amount}</td>
              <td className="py-2 px-4 border-b">{invoice.paidAmount}</td>
              <td className="py-2 px-4 border-b">{invoice.balance}</td>
              <td className="py-2 px-4 border-b">{invoice.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEditInvoice(invoice)}
                  className="mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteInvoice(invoice.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedInvoice && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Collection for Invoice {selectedInvoice.invoiceNumber}
          </h3>
          <CollectionsList invoiceId={selectedInvoice.id} />
        </div>
      )}
    </div>
  );
};

export default InvoicesList;
