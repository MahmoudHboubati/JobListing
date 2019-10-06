import React, { Component } from 'react';
import './JobCard.scss';

class JobCard extends Component {
    render() {

        let job = this.props.job;

        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{job.position}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.postedOn}</h6>
                    <p className="card-text">{job.description}</p>
                    <button className="btn btn-primary">APPLY AND OFFER</button>
                </div>
            </div>
        )
    }
}

export default JobCard;
