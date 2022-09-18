export function convertMinutesToHourString(minutes: number) {
  const hoursString = Math.floor(minutes / 60);
  const minutesString = minutes % 60;

  return `${String(hoursString).padStart(2, "0")}:${String(
    minutesString
  ).padStart(2, "0")}`;
}
