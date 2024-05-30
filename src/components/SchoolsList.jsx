import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SchoolsList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch('https://sales-dashboard-mjen.onrender.com/schools');
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Schools</h1>
      <ul>
        {schools.map(school => (
          <li key={school.id} className="mb-4">
            <Link to={`/schools/${school.id}`} className="text-lg text-blue-500 hover:underline">
              {school.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolsList;
