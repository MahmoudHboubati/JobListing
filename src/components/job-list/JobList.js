import React, { Component } from 'react';
import './JobList.css';
import JobCard from '../job-card/JobCard';

class JobList extends Component {
    render() {
        return (
            <div className="container justify-content-center">
                <div className="card-columns two-columns">
                    {this.props.jobs.map((job) => (
                        <JobCard key={job.id}></JobCard>
                    ))}
                </div>
                <button className="btn btn-primary w-100">Load more...</button>
            </div>
        );
    }
}

export default JobList;
