export const timeStamps = (dateArg: string): number | null => {
  if (!dateArg) return null;
  return new Date(dateArg).getTime();
};

export const getDateTimeString = (timeStamp: string | number) => {
  timeStamp = Number(timeStamp);
  const date = new Date(timeStamp);
  return `${date.toLocaleString()}`;
};
