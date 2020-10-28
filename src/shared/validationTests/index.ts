export const expiryDateTest = (value: string | null | undefined) => {
  const maxMonth = 12;
  const spllittedDate = value ? value.split('/') : [];
  const currentMM = new Date().getMonth() + 1;
  const currentYY = Number(new Date().getFullYear().toString().substr(-2));

  const isMonthValid = Number(spllittedDate[0]) <= maxMonth;
  const isYearValid = Number(spllittedDate[1]) >= currentYY;

  if (currentYY === Number(spllittedDate[1])) {
    return Number(spllittedDate[0]) > currentMM;
  }

  return isMonthValid && isYearValid;
};
