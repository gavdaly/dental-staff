import React from "react";
import { Router, Link } from "@reach/router";
import { AddExam } from "../components/AddExam";
import { PreviousExams } from "../components/PreviousExams";
import { ArchiveExams } from "../components/ArchiveExams";

export default function Exam() {
  return (
    <>
      <nav>
        <Link to="previous">List of exams</Link>
        <Link to="new">Add</Link>
        <Link to="archived">Archived</Link>
      </nav>
      <Router>
        <AddExam path="new" />
        <PreviousExams path="previous" />
        <ArchiveExams path="archived" />
      </Router>
    </>
  );
}
