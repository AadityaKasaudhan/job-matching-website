import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Skills Required: {job.skillsRequired.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
