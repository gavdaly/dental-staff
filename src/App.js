import React from 'react';
import { Router, Link } from "@reach/router"
import styled from '@emotion/styled'

import Auth from './components/Auth'
import LoggedIn from './components/LoggedIn'

import Dashboard from './components/Dashboard'
import Timesheet from './components/Timesheet'
import Timesheets from './components/Timesheets'

import Exam from './components/Exam'
import Exams from './components/Exams'
import Notes from './components/Notes'
import Schedule from './components/Schedule'
import Settings from './components/Settings'
import User from './components/User'
import Users from './components/Users'


function App() {
  return (
    <Auth>
    <AppWrapper>
      <Header>
        <h1>Dental Care</h1>
        <User />
      </Header>
      <Navigation>
        <Link to="/">Dashboard</Link>
        <Link to="timesheet">Timesheet</Link>
        <Link to="timesheets">Timesheets</Link>
        <Link to="exam">Exam</Link>
        <Link to="notes">Notes</Link>
        <Link to="schedule">Schedule</Link>
        <Link to="settings">Settings</Link>
        <Link to="users">Users</Link>
      </Navigation>
      <main>
        <Router>
          <Dashboard path ="/" />
          <Timesheet path="timesheet" />
          <Timesheets path="timesheets" />
          <Exam path="exam" />
          <Exams path="exams" />
          <Notes path="notes" />
          <Schedule path="schedule" />
          <Settings path="settings" />
          <Users path="users" />
        </Router>
      </main>
      <LoggedIn />
      <Footer>Footer Content Here</Footer>
    </AppWrapper>
    </Auth>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto repeat(7, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  /* grid-auto-rows: minmax(100px, auto); */
  grid-template-areas:
    'hd  hd   hd   hd   hd   hd   hd   hd   hd'
    'nav main main main main main main main li'
    'ft  ft   ft   ft   ft   ft   ft   ft   ft';
`

const Header = styled.header`
  grid-area: hd;
  display: flex;
  justify-content: space-between;
  background-color: #512da8;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), inset 0 -3px 0 rgba(0, 0, 0, 0.2);
`

const Navigation = styled.nav`
display: flex;
  flex-direction: column;
  grid-area: nav;
  border-right: 2px solid #999;

 a {
  padding: 10px 10px 0 10px;
  transition: transform 0.3s;
}

 a:hover {
  transform: scale(1.2);
 }
`

const Footer = styled.footer`
grid-area: ft;
  background: #555;
  color: whitesmoke;
`