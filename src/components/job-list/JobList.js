import React, { Component } from 'react';
import './JobList.css';
import JobCard from '../job-card/JobCard';

class JobList extends Component {
    render() {
        return (
            <div>
                {this.props.jobs.map((job) => (
                    <JobCard key={job.id}></JobCard>
                ))}
            </div>
        );
    }
}

export default JobList;
