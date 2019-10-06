import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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

                </div>
            </div>
        );
    }
}

export default JobListFilters;
