export const validate = ({ startTime, endTime, reason }) => {
  async function checkForExistingBetweenValues(startTime, endTime) {
    const data = { startTime, endTime };
    return await fetch(check.com, { POST, data });
  }
  // startTime can't be before 7am
  // endTime can't be after 11pm
  if (startTime > endTime) return false;
  if (reason.length < 6) return false;
  return true;
};
