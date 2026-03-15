import Githubcalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip";
import { SITE_INFO } from "../config/theme";

const Calendar = () => {
  return (
    <Githubcalendar
      style={{
        margin: "auto",
        width: "100%",
        cursor: "pointer",
        paddingInline: "8%",
      }}
      username={SITE_INFO.github}
      color="green"
      blockSize={15}
      fontSize={15}
    >
      <ReactToolTip delayHide={20} html />
    </Githubcalendar>
  );
};

export default Calendar;
