import React, { Component } from 'react';
import './JobListFilters.scss';

class JobListFilters extends Component {
    render() {
        return (
            <div className="job-list-filters">
                <div className="row">
                    <div className="col-md-4">
                        <div className="job-search-tab">
                            <div className="tab-title">I am looking for</div>
                            <div className="tab-main-title">Manegerial Jobs</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="job-search-tab">
                            <div className="tab-title">I am looking for</div>
                            <div className="tab-main-title">Development Jobs</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="job-search-tab">
                            <div className="tab-title">I am looking for</div>
                            <div className="tab-main-title">All Jobs</div>
                        </div>
                    </div>
                </div>
                <div className="filters">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobListFilters;
