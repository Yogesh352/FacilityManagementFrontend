import * as React from "react";
import { HoverCard, Title } from "@mantine/core";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import { IconClock } from "@tabler/icons-react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import HistoryIcon from "@mui/icons-material/History";
import "./CustomizationCard.css";

export default function CustomizationCard({
    tagName,
    startTime,
    endTime,
    bookingAmount,
    minStudents,
    allowEarlyCheckout,
    description,
}) {
    React.useEffect(() => {
        // console.log("hello");
        // console.log("tag:" + tagName);
        // console.log("time:" + startTime);
    });
    // const format = "HH:mm";
    return (
        <div className="container">
            {/* <div className="duplicatecontainer">
                <Button
                    variant="text"
                    style={{
                        textTransform: "none",
                        color: "grey",
                        width: "100px",
                        
                    }}
                >
                    Duplicate
                </Button>
            </div> */}
            <div className="inputcontainer">
                <div className="inputrow">
                    <div className="titlename1">
                        <p style={{ fontSize: "14px" }}>
                            Name of Tag{" "}
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <InfoIcon
                                        fontSize="small"
                                        style={{ color: "darkgray" }}
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <p>
                                        All facilities with this tag will have
                                        these rules applied.
                                    </p>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </p>
                    </div>
                    <div className="field">
                        <p className="fieldtext">
                            {" "}
                            <MeetingRoomIcon />
                            {tagName}
                        </p>
                    </div>
                </div>
                <div className="inputrow">
                    <div className="titlename2">
                        <p style={{ fontSize: "14px" }}>
                            Availability{" "}
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <InfoIcon
                                        fontSize="small"
                                        style={{ color: "darkgray" }}
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <p>
                                        Bookers can only book these facilities
                                        within the allowed time.
                                    </p>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </p>
                    </div>
                    {/* <div><TimePicker.RangePicker /></div> */}
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                            }}
                        >
                            <IconClock
                                size="1rem"
                                stroke={1.5}
                                style={{ marginRight: "3px" }}
                            />
                            {startTime}
                        </p>
                    </div>
                    <p
                        style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                            color: "darkgray",
                        }}
                    >
                        to
                    </p>
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                            }}
                        >
                            <IconClock
                                size="1rem"
                                stroke={1.5}
                                style={{ marginRight: "3px" }}
                            />
                            {endTime}
                        </p>
                    </div>
                </div>
                <div className="inputrow">
                    <div className="titlename3">
                        <p style={{ fontSize: "14px" }}>
                            Booking Amount{"  "}
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <InfoIcon
                                        fontSize="small"
                                        style={{ color: "darkgray" }}
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <p>
                                        Cost of booking this facility for one 1
                                        hour.
                                    </p>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </p>
                    </div>
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                            }}
                        >
                            <PaidIcon style={{ marginRight: "3px" }} />
                            {bookingAmount}/hr
                        </p>
                    </div>
                </div>
                <div className="inputrow">
                    <div className="titlename4">
                        <p style={{ fontSize: "14px" }}>
                            Minimum Students Needed
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <InfoIcon
                                        fontSize="small"
                                        style={{ color: "darkgray" }}
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <p>
                                        Minumum students needed to book a
                                        facility.
                                    </p>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </p>
                    </div>
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                            }}
                        >
                            <PeopleIcon style={{ marginRight: "3px" }} />
                            {minStudents}
                        </p>
                    </div>
                </div>
                <div className="inputrow">
                    <div className="titlename6">
                        <p style={{ fontSize: "14px" }}>
                            Allow early checkout
                            <HoverCard width={280} shadow="md">
                                <HoverCard.Target>
                                    <InfoIcon
                                        fontSize="small"
                                        style={{ color: "darkgray" }}
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <p>
                                        Selecting this option wll allow users to
                                        checkout of a facility early.
                                    </p>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </p>
                    </div>
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                            }}
                        >
                            <HistoryIcon style={{ marginRight: "3px" }} />
                            {allowEarlyCheckout}
                        </p>
                    </div>
                </div>
                <div className="inputrow">
                    <div className="titlename5">
                        <p style={{ fontSize: "14px" }}>Room Description</p>
                    </div>
                    <div className="field">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "darkgray",
                                maxWidth: "250px",
                            }}
                        >
                            <DescriptionIcon style={{ marginRight: "3px" }} />
                            {description}
                        </p>
                    </div>
                </div>
                {/* <div className="submitrow">
                    <div className="inputname5">
                        <Button
                            variant="text"
                            style={{
                                "margin-right": "100px",
                                textTransform: "none",
                                color: "grey",
                                fontSize: "13px",
                            }}
                        >
                            Add more Rules
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            style={{
                                "margin-right": "100px",
                                textTransform: "none",
                                color: "grey",
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
