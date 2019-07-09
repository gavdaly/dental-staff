import React, { useState } from "react";

import { Router, Link } from "@reach/router";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { Bars, Close } from "./svg";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useUser();
  const props = useSpring({
    opacity: menuOpen ? 1 : 0,
    transform: `translate(${menuOpen ? 0 : -100}%)`
  });

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    console.log("Menu", menuOpen);
  }
  return (
    <AppWrapper>
      <Header>
        <button
          style={{
            width: "2em",
            background: "none",
            color: "var(--color-white)"
          }}
          onClick={toggleMenu}
        >
          {menuOpen ? <Close /> : <Bars />}
        </button>
        <h1>Dental Care</h1>
        <User />
      </Header>
      <Navigation style={props} onClick={e => setMenuOpen(false)}>
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

      <Main id="main">
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
      </Main>
    </AppWrapper>
  );
}

export default AuthenticatedApp;

const AppWrapper = styled.div`
  --small-width: true;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "main main"
  }
`;

const Main = styled.main`
  grid-area: main;
  width: 100%;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  padding: 0.6rem;
  align-items: baseline;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), inset 0 -3px 0 rgba(0, 0, 0, 0.2);
`;

const Navigation = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  grid-area: main;
  background-color: var(--color-neutral);
  overflow: none;
  z-index: 1;
  width: auto;
  a {
    color: var(--color-black);
    padding: 10px 10px 0 10px;
    transition: color 300ms;
  }
`;
