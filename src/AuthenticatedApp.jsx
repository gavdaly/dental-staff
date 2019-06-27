import React from "react";

import { Router, Link } from "@reach/router";
import styled from "@emotion/styled";

import LoggedIn from "./components/LoggedIn";
import User from "./components/User";

import {
  Dashboard,
  Exam,
  Exams,
  Notes,
  Schedule,
  Settings,
  Timesheet,
  Timesheets,
  Users,
  Vacations
} from "./screens";

import { useUser } from "./hooks/userContext";

function AuthenticatedApp() {
  const { currentUser } = useUser();
  return (
    <AppWrapper>
      <Header>
        <h1>Dental Care</h1>
        <User />
      </Header>
      <Navigation>
        <Link to="/">Dashboard</Link>
        <Link to="timesheet">Timesheet</Link>
        {currentUser.role === "business_staff" && (
          <>
            <Link to="notes">Notes</Link>
          </>
        )}
        {currentUser.role === "provider" && (
          <>
            <Link to="exam">Exam</Link>
          </>
        )}
        {/* <Link to="schedule">Schedule</Link> */}
        {currentUser.role === "admin" && (
          <>
            <Link to="exams">Exams</Link>
            <Link to="timesheets">Timesheets</Link>
            <Link to="users">Users</Link>
          </>
        )}
        <Link to="vacations">Vacations & Time Off</Link>
        <Link to="settings">Settings</Link>
      </Navigation>
      <main id="main">
        <Router>
          <Dashboard path="/" />
          <Timesheet path="timesheet" />
          <Timesheets path="timesheets" />
          <Exam path="exam" />
          <Exams path="exams" />
          <Notes path="notes" />
          <Schedule path="schedule" />
          <Settings path="settings" />
          <Users path="users" />
          <Vacations path="vacations" />
        </Router>
      </main>
      <LoggedIn />
      <Footer>Footer Content Here</Footer>
    </AppWrapper>
  );
}

export default AuthenticatedApp;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  @media screen {
  }
  grid-template-columns: auto repeat(7, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  /* grid-auto-rows: minmax(100px, auto); */
  grid-template-areas:
    "hd  hd   hd   hd   hd   hd   hd   hd   hd"
    "nav main main main main main main main li"
    "ft  ft   ft   ft   ft   ft   ft   ft   ft";
  #main {
    grid-area: main;
  }
`;

const Header = styled.header`
  grid-area: hd;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  padding: 0.6rem;
  align-items: baseline;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), inset 0 -3px 0 rgba(0, 0, 0, 0.2); */
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: nav;
  background-color: var(--color-neutral);

  a {
    color: var(--color-black);
    padding: 10px 10px 0 10px;
    transition: color 300ms;
  }

  a:hover {
    /* transform: scale(1.2); */
  }
`;

const Footer = styled.footer`
  grid-area: ft;
  background: #555;
  color: whitesmoke;
  padding: 0.6rem;
`;
