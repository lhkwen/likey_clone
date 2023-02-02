import React, { useMemo } from 'react';

const MINUTES = 'MINUTES';
const HOURS = 'HOURS';
// const DAYS = "DAYS";

function AlarmTime({ time, timeType }) {
  const TimeSet = useMemo(() => {
    if (timeType === MINUTES) {
      return time === 0 ? `1분전` : `${time}분전`;
    } if (timeType === HOURS) {
      return `${time}시간전`;
    }
    return `${time}일전`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, timeType]);

  return (
    <span >{ TimeSet }</span>
  );
}

export default AlarmTime;
