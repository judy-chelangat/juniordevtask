import React, { useEffect, useState } from 'react';

const CollectionsList = ({ schoolId }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(`http://localhost:3001/collections?schoolId=${schoolId}`);
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, [schoolId]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:4000/collections/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        setCollections(collections.map(collection =>
          collection.id === id ? { ...collection, status: newStatus } : collection
        ));
      } else {
        console.error('Error updating collection status');
      }
    } catch (error) {
      console.error('Error updating collection status:', error);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Collections</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Invoice Number</th>
            <th className="py-2 px-4 border-b">Collection Number</th>
            <th className="py-2 px-4 border-b">Date of Collection</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {collections.map(collection => (
            <tr key={collection.id}>
              <td className="py-2 px-4 border-b">{collection.invoiceNumber}</td>
              <td className="py-2 px-4 border-b">{collection.collectionNumber}</td>
              <td className="py-2 px-4 border-b">{collection.date}</td>
              <td className="py-2 px-4 border-b">{collection.amount}</td>
              <td className="py-2 px-4 border-b">{collection.status}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={collection.status}
                  onChange={(e) => handleStatusChange(collection.id, e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="Valid">Valid</option>
                  <option value="Bounced">Bounced</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionsList;
