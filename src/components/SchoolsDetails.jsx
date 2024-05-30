import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoicesList from "./InvoiceList";
import CollectionsList from "./CollectionsList";

const SchoolDetails = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      try {
        const response = await fetch(`https://sales-dashboard-mjen.onrender.com/schools/${id}`);
        const data = await response.json();
        setSchool(data);
      } catch (error) {
        console.error("Error fetching school details:", error);
      }
    };

    fetchSchoolDetails();
  }, [id]);

  if (!school) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">{school.name}</h1>
      <div className="mb-8">
        <p>
          <strong>Type:</strong> {school.type}
        </p>
        <p>
          <strong>Product:</strong> {school.product}
        </p>
        <p>
          <strong>County:</strong> {school.county}
        </p>
        <p>
          <strong>Registration Date:</strong> {school.registrationDate}
        </p>
        <p>
          <strong>Contact:</strong> {school.contact}
        </p>
        <p>
          <strong>Balance:</strong> {school.balance}
        </p>
      </div>
      <InvoicesList schoolId={id} />
      <CollectionsList schoolId={id} />
    </div>
  );
};

export default SchoolDetails;
