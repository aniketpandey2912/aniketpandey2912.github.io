import { Box } from "@chakra-ui/react";
import Githubcalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";

const Calendar = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box w={{ base: "80%", sm: "80%", md: "70%", lg: "70%" }} m="auto">
      <Githubcalendar
        style={{ margin: "auto" }}
        username="aniketpandey2912"
        color="green"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
        <ReactToolTip delayHide={20} html />
      </Githubcalendar>
    </Box>
  );
};

export default Calendar;
