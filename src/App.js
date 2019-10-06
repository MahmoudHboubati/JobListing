import React, { Component } from 'react';
import './App.css';
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
  }

  componentDidMount() {
    fetch(this.JOBS_API)
      .then(res => res.json())
      .then((data) => {
        this.setState({ jobs: data });
        console.log(data);
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <HeaderBackground></HeaderBackground>
        <JobListFilters></JobListFilters>
        <JobList jobs={this.state.jobs}></JobList>
      </div>
    );
  }
}

export default App;
