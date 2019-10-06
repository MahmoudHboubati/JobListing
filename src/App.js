import React, { Component } from 'react';
import './App.css';
import JobList from './components/job-list/JobList';
import JobListFilters from './components/job-list-filters/JobListFilters';
import HeaderBackground from './components/header-background/HeaderBackground';

class App extends Component {

  jobs = [
    { id: 1, position: "1", description: "1" },
    { id: 1, position: "1", description: "1" },
    { id: 1, position: "1", description: "1" },
    { id: 1, position: "1", description: "1" }
  ]
  render() {
    return (
      <div className="App">
        <HeaderBackground></HeaderBackground>
        <JobListFilters></JobListFilters>
        <JobList jobs={this.jobs}></JobList>
      </div>
    );
  }
}

export default App;
