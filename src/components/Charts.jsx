import React from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const pieData = [
  { name: 'Zeraki Analytics', value: 400 },
  { name: 'Zeraki Finance', value: 300 },
  { name: 'Zeraki Timetable', value: 300 },
];

const barData = [
  { name: 'Primary', ZerakiAnalytics: 300, ZerakiFinance: 200, ZerakiTimetable: 100 },
  { name: 'Secondary', ZerakiAnalytics: 200, ZerakiFinance: 100, ZerakiTimetable: 300 },
  { name: 'IGCSE', ZerakiAnalytics: 100, ZerakiFinance: 400, ZerakiTimetable: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Signup Target</h3>
      <PieChart width={400} height={400}>
        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Signup Overview</h3>
      <BarChart width={600} height={300} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ZerakiAnalytics" fill="#8884d8" />
        <Bar dataKey="ZerakiFinance" fill="#82ca9d" />
        <Bar dataKey="ZerakiTimetable" fill="#ffc658" />
      </BarChart>
    </div>
  </div>
);

export default Charts;
