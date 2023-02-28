import Githubcalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";

const Calendar = () => {
  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 12;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };

  return (
    <Githubcalendar
      style={{
        margin: "auto",
        width: "100%",
        cursor: "pointer",
        paddingInline: "8%",
      }}
      username="aniketpandey2912"
      color="green"
      // transformData={selectLastHalfYear}
      blockSize={15}
      fontSize={15}
    >
      <ReactToolTip delayHide={20} html />
    </Githubcalendar>
  );
};

export default Calendar;
