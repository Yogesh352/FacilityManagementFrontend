import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import CustomizationCard from "../components/Rules/CustomizationCard";
import InfoIcon from "@mui/icons-material/Info";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { Input, HoverCard, TextInput } from "@mantine/core";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FacilitiesSidebar from "../components/RuleCustomization/FacilitiesSidebar";
// import "./FacilitiesCustomization.css";

export default function FacilitiesCustomization() {
  const [tags, setTags] = React.useState([
    {
      tagName: "Study Rooms",
      startTime: "07:00",
      endTime: "22:00",
      bookingAmount: "30",
      minStudents: "3",
      description: "This room is for all the Group Study Rooms",
    },
  ]);
  const [tag, setTag] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [booking, setBooking] = React.useState("");
  const [students, setStudents] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [opened, { open, close }] = useDisclosure(false);

  const onSave = () => {
    const temp = {
      tagName: tag,
      startTime: startTime,
      endTime: endTime,
      bookingAmount: booking,
      minStudents: students,
      description: description,
    };
    setTag("");
    setStartTime("");
    setEndTime("");
    setBooking("");
    setStudents("");
    setDescription("");
    setTags(() => [...tags, temp]);

    close();

    tags.map((tag) => console.log("tagName " + tag.tagName));
  };

  return (
    <>
      <FacilitiesSidebar />
    </>
    //     <div>
    //       <div className="title">
    //         <Typography variant="h5" gutterBottom>
    //           Facilities Customization
    //         </Typography>
    //       </div>

    //       <div className="maincontainer">
    //         {tags.map((tag) => (
    //           <CustomizationCard
    //             tagName={tag.tagName}
    //             startTime={tag.startTime}
    //             endTime={tag.endTime}
    //             bookingAmount={tag.bookingAmount}
    //             minStudents={tag.minStudents}
    //             description={tag.description}
    //             // tag
    //           />
    //         ))}
    //         <div className="addtagbutton">
    //           <Button
    //             variant="contained"
    //             sx={{
    //               color: "white",
    //               "background-color": "#9dbfd8",
    //               width: "400px",
    //               marginLeft: "45px",
    //             }}
    //             onClick={open}
    //           >
    //             + Add more tags
    //           </Button>
    //         </div>
    //       </div>

    //       <Modal
    //         opened={opened}
    //         onClose={close}
    //         withCloseButton={false}
    //         size="70%"
    //         title="Input Fields Below"
    //         overlayProps={{ borderRadius: "30px" }}
    //       >
    //         <div className="inputcontainer">
    //           <div className="inputrow">
    //             <div className="inputname1">
    //               <p>
    //                 Name of Tag
    //                 <HoverCard width={280} shadow="md">
    //                   <HoverCard.Target>
    //                     <InfoIcon fontSize="small" style={{ color: "darkgray" }} />
    //                   </HoverCard.Target>
    //                   <HoverCard.Dropdown>
    //                     <p>
    //                       All facilities with this tag will have these rules
    //                       applied.
    //                     </p>
    //                   </HoverCard.Dropdown>
    //                 </HoverCard>
    //               </p>
    //             </div>
    //             <div>
    //               <TextInput
    //                 // withAsterisk
    //                 // required
    //                 // error="both below the input"
    //                 className="inputsmall"
    //                 icon={<MeetingRoomIcon />}
    //                 placeholder="Tag"
    //                 value={tag}
    //                 onChange={(e) => {
    //                   setTag(e.target.value);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="inputrow">
    //             <div className="inputname2">
    //               <p>
    //                 Availability{" "}
    //                 <HoverCard width={280} shadow="md">
    //                   <HoverCard.Target>
    //                     <InfoIcon fontSize="small" style={{ color: "darkgray" }} />
    //                   </HoverCard.Target>
    //                   <HoverCard.Dropdown>
    //                     <p>
    //                       Bookers can only book these facilities within the allowed
    //                       time.
    //                     </p>
    //                   </HoverCard.Dropdown>
    //                 </HoverCard>
    //               </p>
    //             </div>

    //             {/* <TimePicker /> */}
    //             <TimeInput
    //               icon={<IconClock size="1rem" stroke={1.5} />}
    //               maw={400}
    //               mx="auto"
    //               value={startTime}
    //               onChange={(e) => {
    //                 setStartTime(e.target.value);
    //               }}
    //               description="Start Time"
    //               style={{ margin: "10px" }}
    //             />
    //             <TimeInput
    //               icon={<IconClock size="1rem" stroke={1.5} />}
    //               maw={400}
    //               mx="auto"
    //               value={endTime}
    //               onChange={(e) => {
    //                 setEndTime(e.target.value);
    //               }}
    //               description="End Time"
    //               style={{ margin: "10px" }}
    //             />
    //           </div>
    //           <div className="inputrow">
    //             <div className="inputname3">
    //               <p>
    //                 Booking Amount{" "}
    //                 <HoverCard width={280} shadow="md">
    //                   <HoverCard.Target>
    //                     <InfoIcon fontSize="small" style={{ color: "darkgray" }} />
    //                   </HoverCard.Target>
    //                   <HoverCard.Dropdown>
    //                     <p>Cost of booking this facility for one 1 hour.</p>
    //                   </HoverCard.Dropdown>
    //                 </HoverCard>
    //               </p>
    //             </div>
    //             <div>
    //               <Input
    //                 className="inputsmall"
    //                 icon={<PaidIcon />}
    //                 placeholder="Amount per hour"
    //                 value={booking}
    //                 onChange={(e) => {
    //                   setBooking(e.target.value);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="inputrow">
    //             <div className="inputname4">
    //               <p>
    //                 Minimum Students Needed{" "}
    //                 <HoverCard width={280} shadow="md">
    //                   <HoverCard.Target>
    //                     <InfoIcon fontSize="small" style={{ color: "darkgray" }} />
    //                   </HoverCard.Target>
    //                   <HoverCard.Dropdown>
    //                     <p>Minumum students needed to book a facility.</p>
    //                   </HoverCard.Dropdown>
    //                 </HoverCard>
    //               </p>
    //             </div>
    //             <div>
    //               <Input
    //                 className="inputsmall"
    //                 icon={<PeopleIcon />}
    //                 placeholder="Number"
    //                 value={students}
    //                 onChange={(e) => {
    //                   setStudents(e.target.value);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="inputrow">
    //             <div className="inputname5">
    //               <p>Room Description</p>
    //             </div>
    //             <div>
    //               <Input
    //                 className="inputlarge"
    //                 placeholder="Description"
    //                 styles={{ width: "200px" }}
    //                 value={description}
    //                 onChange={(e) => {
    //                   setDescription(e.target.value);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="submitrow">
    //             <div className="inputname5">
    //               <Button
    //                 variant="text"
    //                 style={{
    //                   // "margin-right": "100px",
    //                   textTransform: "none",
    //                   color: "grey",
    //                 }}
    //                 onClick={() => {
    //                   alert("This is for future implementation!");
    //                 }}
    //               >
    //                 Add more Rules
    //               </Button>
    //             </div>
    //             <div>
    //               <Button
    //                 variant="outlined"
    //                 style={{
    //                   // "margin-right": "100px",
    //                   textTransform: "none",
    //                   color: "grey",
    //                 }}
    //                 onClick={() => {
    //                   // alert("clicked");
    //                   onSave();
    //                 }}
    //               >
    //                 Save
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //         {/* </div> */}
    //       </Modal>
    //     </div>
  );
}
