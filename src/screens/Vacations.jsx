import React from "react";
import { RequestVacationTIme } from "../components/RequestVacationTIme";
import { UpcomingVacations } from "../components/UpcomingVacations";

const Vacations = () => {
  return (
    <>
      <UpcomingVacations />
      <RequestVacationTIme />
    </>
  );
};

export default Vacations;
