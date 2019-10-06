import React from 'react';
import './JobCard.css';
import JobCard from './JobCard';

function JobList(props) {
    return (
        <div>
            {props.jobs.map((job) => (
                <JobCard></JobCard>
            ))}
        </div>
    );
}

export default JobList;
