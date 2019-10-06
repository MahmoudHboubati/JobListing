import React, { Component } from 'react';
import './App.scss';
import JobList from './components/job-list/JobList';
import JobListFilters from './components/job-list-filters/JobListFilters';
import HeaderBackground from './components/header-background/HeaderBackground';

class App extends Component {

  SERVER_URL = "http://localhost:3001/";
  JOBS_API_URL = "api/job";
  JOBS_API = this.SERVER_URL + this.JOBS_API_URL;

  constructor() {
    super()
    this.state = { jobs: [] };
    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentDidMount() {
    this.fetchJobs({});
  }

  fetchJobs(filters) {

    let query = `?nationality=${filters.nationality || ''}&gender=${filters.gender || ''}&postedOn=${filters.postedOn}`;

    fetch(this.JOBS_API + query)
      .then(res => res.json())
      .then((data) => {
        this.setState({ jobs: data });
      })
      .catch(console.log);

    console.log(filters);
  }

  render() {
    return (
      <div className="App">
        <HeaderBackground></HeaderBackground>
        <JobListFilters applyFilters={this.fetchJobs}></JobListFilters>
        <JobList jobs={this.state.jobs}></JobList>
      </div>
    );
  }
}

export default App;
