import React from "react";

// import client from "../../utils/apiClient";

// async function sendMissingTime(state) {
//   const response = await client("POST", `/staff/missing`, {
//     body: { missing_time_sheet: { ...state } }
//   });
// }

export const AddMissingTime = () => {
  return (
    <form>
      <input type="date" name="" id="" />
      <input type="time" name="" id="" />
      <input type="time" name="" id="" />
      <textarea name="" id="" cols="30" rows="10" />
    </form>
  );
};
