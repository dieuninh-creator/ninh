import { createGlobalState } from 'react-hooks-global-state';
import moment from 'moment';

const { setGlobalState, useGlobalState, getGlobalState } =
  createGlobalState({
    createModal: 'scale-0',
    connectedAccount: '',
    contract: null,
    proposals: [],
    isStakeholder: false,
    balance: 0,
    mybalance: 0,
  });

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    return start + end;
  }
  return text;
};

const daysRemaining = (days) => {
  const todaysdate = moment();
  let daysVal = Number((days + '000').slice(0));
  daysVal = moment(daysVal).format('YYYY-MM-DD');
  daysVal = moment(daysVal);
  daysVal = daysVal.diff(todaysdate, 'days');
  return daysVal === 1 ? '1 day' : daysVal + ' days';
};

export {
  truncate,
  setGlobalState,
  useGlobalState,
  getGlobalState,
  daysRemaining,
};