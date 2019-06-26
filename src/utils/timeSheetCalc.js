const deltaBetweenDates = (one, two) => {
  const timeOne = new Date(one);
  const timeTwo = new Date(two);
  return Math.abs(timeOne - timeTwo) / 1000;
};

export const beginningOfWeek = date => {
  const parsedDate = new Date(date);
  const sunday = new Date(parsedDate.setHours(-24 * parsedDate.getDay()));
  return sunday.toISOString().slice(0, 10);
};

export const threeWeeksSunday = () => {
  const today = new Date();
  const sunday = new Date(today.setHours(-24 * today.getDay()));
  return sunday - 21;
};

export const today = () => {
  const day = new Date();
  return day.toISOString().slice(0, 10);
};

const mergeData = ({ assignations, adjustments, corrections }) => {
  const e = assignations.map(entry => {
    return {
      ...entry,
      type: "hours",
      start: entry.start_time,
      correction: corrections.find(
        correction => correction.assignation_id === entry.id
      ),
      duration: deltaBetweenDates(entry.start_time, entry.end_time)
    };
  });
  const a = adjustments.map(adjustment => {
    return {
      ...adjustment,
      type: adjustment.category,
      start: adjustment.start_date,
      duration: adjustment.duration
    };
  });
  return [...e, ...a];
};

const sortUsers = users => {
  return users.sort((a, b) => {
    if (`${a.last_name}, ${a.first_name}` > `${b.last_name}, ${b.first_name}`) {
      return 1;
    }
    return -1;
  });
};

const fullTimesheet = (users, data) => {
  return users.map(user => {
    const userHours = data.filter(item => item.key === user.log_in_key);
    const userVacatonAndAdjustments = data.filter(
      item => item.user_id === user.id
    );
    const userData = [...userHours, ...userVacatonAndAdjustments].sort(
      (a, b) => a.start - b.start
    );
    return {
      ...user,
      weekly_summary: weeklySummary(userData),
      time_sheet: weeklyTimeSheet(userData)
    };
  });
};

export const userTimeSheet = data => {
  if (!data) return null;
  const d = mergeData(data);
  return {
    weeklySummary: weeklySummary(d),
    timesheet: weeklyTimeSheet(d)
  };
};

const weeklySummary = userData => {
  return userData.reduce((prev, current) => {
    const startOfWeek = beginningOfWeek(current.start);
    if (!prev[startOfWeek]) {
      prev[startOfWeek] = { hours: 0, vacations: 0, adjustments: 0 };
    }
    prev[startOfWeek] = prev[startOfWeek][current.type] + current.duration;
    return prev;
  }, {});
};

const weeklyTimeSheet = userData => {
  return userData.reduce((prev, currentItem) => {
    const date = currentItem.start.slice(0, 10);
    if (prev[date]) {
      prev[date] = [...prev[date], currentItem];
    } else {
      prev[date] = [currentItem];
    }
    return prev;
  }, {});
};

export const generateTimesheet = (users, data) => {
  fullTimesheet(sortUsers(users), mergeData(data));
};
