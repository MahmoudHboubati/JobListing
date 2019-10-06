import React, { Component } from 'react';
import './JobCard.scss';
import cardIcon from '../../assets/icons/wreath.svg';

class JobCard extends Component {
    render() {

        let job = this.props.job;

        return (
            <div className="card" >
                <div className="card-body">
                    <img className="card-icon" src={cardIcon} alt="Kiwi standing on oval" />
                    <span className="badge badge-outline top-right radius-10">{job.type}</span>
                    <h5 className="card-title">
                        {job.position}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.postedOn}</h6>
                    <p className="card-text">{job.description}</p>
                    <div className="row">
                        <div className="col-sm-4">
                            <b>Nationality</b>
                            <div className="detail-item-content">{job.nationality}</div>
                        </div>
                        <div className="col-sm-4">
                            <b>Salary</b>
                            <div className="detail-item-content">{job.salary}</div>
                        </div>
                        <div className="col-sm-4">
                            <b>Last Date</b>
                            <div className="detail-item-content">{job.endsOn}</div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-apply">APPLY AND OFFER</button>
                </div>
            </div>
        )
    }
}

export default JobCard;
