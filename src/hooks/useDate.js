const useDate = (simpFormat = false) => {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesda",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date(),
    time =
      today.getHours().toString().padStart(2, "0") +
      ":" +
      today.getMinutes().toString().padStart(2, "0") +
      ":" +
      today.getSeconds().toString().padStart(2, "0"),
    day = today.getDay(),
    date = today.getDate(),
    month = today.getMonth() + 1,
    year = today.getFullYear();

  if (simpFormat) {
    return `${year}-${month.toString().padStart(2, "0")}-${date
      .toString()
      .padStart(2, "0")} ${time}`;
  } else {
    return `${DAYS[day]} ${date} ${MONTHS[month - 1]} ${year}`;
  }
};

export default useDate;
