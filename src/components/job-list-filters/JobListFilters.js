import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './JobListFilters.scss';

class JobListFilters extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.setNationality = this.setNationality.bind(this);

        this.state = {
            nationality: { open: false, text: "", value: "" },
            gender: { open: false, text: "", value: "" },
            postedOn: { open: false, text: "", value: "" }
        };
    }

    toggle() {
        this.setState(prevState => ({
            ...prevState,
            nationality: {
                ...prevState.nationality,
                open: !prevState.nationality.open
            }
        }));
    }

    setNationality(nationality) {
        this.setState(prevState => ({
            ...prevState,
            nationality: {
                text: nationality,
                value: nationality,
                open: !prevState.nationality.open
            }
        }), () => {
            this.getFiltersAndEmmet();
        });
    }

    getFiltersAndEmmet() {
        let filters = {
            gender: this.state.gender.value,
            nationality: this.state.nationality.value,
            postedOn: this.state.postedOn.value
        }

        this.props.applyFilters(filters);
    }

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
                    <Dropdown isOpen={this.state.nationality.open} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Nationality
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><div onClick={() => this.setNationality('German')}>German</div></DropdownItem>
                            <DropdownItem><div onClick={() => this.setNationality('Britain')}>Britain</div></DropdownItem>
                            <DropdownItem><div onClick={() => this.setNationality('American')}>American</div></DropdownItem>
                            <DropdownItem><div onClick={() => this.setNationality('Arabic')}>Arabic</div></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default JobListFilters;
