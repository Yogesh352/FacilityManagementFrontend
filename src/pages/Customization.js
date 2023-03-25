import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import InfoIcon from "@mui/icons-material/Info";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { Input, HoverCard, TextInput } from "@mantine/core";
import PropTypes from "prop-types";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem, { useTreeItem } from "@mui/lab/TreeItem";
import clsx from "clsx";
import Switch from "@mui/material/Switch";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import HistoryIcon from "@mui/icons-material/History";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import EditIcon from "@mui/icons-material/Edit";
import "./Customization.css";
import { color } from "@mui/system";

import CustomizationCard from "../components/Rules/CustomizationCard";
import SectionUnlocking from "../components/Rules/SectionUnlocking";
//enable/disbale to view the tag or section unlocking accordingly
var tagView = true;
var buildingView = false;

const CustomContentBuilding = React.forwardRef(function CustomContent(
    props,
    ref
) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleBuildingSelectionClick = (event) => {
        alert("building clicked");
        handleSelection(event);
    };

    const handleAddSectionClick = (event) => {
        alert("add section button clicked");
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
                onClick={handleExpansionClick}
                className={classes.iconContainer}
            >
                {icon}
            </div>
            <Typography
                onClick={handleBuildingSelectionClick}
                component="div"
                className={classes.label}
                style={{ fontWeight: "bolder", fontSize: "20px" }}
            >
                {label}
            </Typography>
            <Button
                style={{
                    // "margin-right": "100px",
                    textTransform: "none",
                    borderColor: "red",
                    width: "200px",
                    backgroundColor: "#9DBFD8",
                    borderRadius: "50px",
                    color: "white",
                    height: "20px",
                }}
                onClick={() => {
                    handleAddSectionClick();
                }}
            >
                + Add section
            </Button>
        </div>
    );
});

const CustomContentSection = React.forwardRef(function CustomContent(
    props,
    ref
) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;
    const [, setUseState] = React.useState("");

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleSectionSelectionClick = (event) => {
        alert("section clicked");
        // // handleSelection(event);
        // tagView = true;
        // // this.setState({});
        // setUseState();
        // // this.forceUpdate();
        // console.log(tagView);
    };
    const handleAddTagClick = (event) => {
        // openTagModal
        alert("add tag clicked");
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
                onClick={handleExpansionClick}
                className={classes.iconContainer}
            >
                {icon}
            </div>
            <Typography
                onClick={handleSectionSelectionClick}
                component="div"
                className={classes.label}
            >
                {label}
            </Typography>
            <Button
                style={{
                    // "margin-right": "100px",
                    textTransform: "none",
                    borderColor: "red",
                    width: "130px",
                    backgroundColor: "#9DBFD8",
                    borderRadius: "50px",
                    color: "white",
                    height: "20px",
                }}
                onClick={() => {
                    handleAddTagClick();
                }}
            >
                + Add Tag
            </Button>
        </div>
    );
});

const CustomContentTag = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleBuildingSelectionClick = (event) => {
        handleSelection(event);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
                onClick={handleExpansionClick}
                className={classes.iconContainer}
            >
                {icon}
            </div>
            <Typography
                onClick={handleBuildingSelectionClick}
                component="div"
                className={classes.label}
            >
                {label}
            </Typography>
        </div>
    );
});

CustomContentBuilding.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    /**
     * className applied to the root element.
     */
    className: PropTypes.string,
    /**
     * The icon to display next to the tree node's label. Either a parent or end icon.
     */
    displayIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label. Either an expansion or collapse icon.
     */
    expansionIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label.
     */
    icon: PropTypes.node,
    /**
     * The tree node label.
     */
    label: PropTypes.node,
    /**
     * The id of the node.
     */
    nodeId: PropTypes.string.isRequired,
};
CustomContentSection.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    /**
     * className applied to the root element.
     */
    className: PropTypes.string,
    /**
     * The icon to display next to the tree node's label. Either a parent or end icon.
     */
    displayIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label. Either an expansion or collapse icon.
     */
    expansionIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label.
     */
    icon: PropTypes.node,
    /**
     * The tree node label.
     */
    label: PropTypes.node,
    /**
     * The id of the node.
     */
    nodeId: PropTypes.string.isRequired,
};
CustomContentTag.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    /**
     * className applied to the root element.
     */
    className: PropTypes.string,
    /**
     * The icon to display next to the tree node's label. Either a parent or end icon.
     */
    displayIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label. Either an expansion or collapse icon.
     */
    expansionIcon: PropTypes.node,
    /**
     * The icon to display next to the tree node's label.
     */
    icon: PropTypes.node,
    /**
     * The tree node label.
     */
    label: PropTypes.node,
    /**
     * The id of the node.
     */
    nodeId: PropTypes.string.isRequired,
};

function CustomTreeItemBuilding({nameOfBuilding, nameOfSections}, props) {
    return(
        <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
            <TreeItem nodeId={nameOfBuilding} label={nameOfBuilding} ContentComponent={CustomContentBuilding} {...props}>
                {Object.keys(nameOfSections).map(section => (
                    <CustomTreeItemSection key={section} section={section} nameOfSections={nameOfSections[section]} />
                ))}
            </TreeItem>
        </TreeView>
    );
}
function CustomTreeItemSection({section, nameOfSections}, props) {
    return(
        <TreeItem nodeId={section} label={section} ContentComponent={CustomContentSection} {...props}>
            {nameOfSections.map(nameSection => (
                <CustomTreeItemTag key={nameSection} tag={nameSection} />
            ))}
        </TreeItem>
    );
}

function CustomTreeItemTag({tag}, props) {
    return <TreeItem nodeId={tag} label={tag} ContentComponent={CustomContentTag} {...props}></TreeItem>
}

export default function Customization() {
    // ***********Everything Tags Related Start***********

    const [tags, setTags] = React.useState([
        {
            tagName: "Study Rooms",
            startTime: "07:00",
            endTime: "22:00",
            bookingAmount: "30",
            minStudents: "3",
            allowEarlyCheckout: "Yes",
            description: "This room is for all the Group Study Rooms",
        },
    ]);

    const [tagName, setTagName] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");
    const [booking, setBooking] = React.useState("");
    const [students, setStudents] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [allowEarlyCheckout, setAllowEarlyCheckout] = React.useState(false);

    const [openedTagModal, { open: openTagModal, close: closeTagModal }] =
        useDisclosure(false);

    const onSaveTag = () => {
        const temp = {
            tagName: tagName,
            startTime: startTime,
            endTime: endTime,
            bookingAmount: booking,
            minStudents: students,
            allowEarlyCheckout: allowEarlyCheckout ? "Yes" : "No",
            description: description,
        };
        setTagName("");
        setStartTime("");
        setEndTime("");
        setBooking("");
        setStudents("");
        setAllowEarlyCheckout(false);
        setDescription("");
        setTags(() => [...tags, temp]);

        closeTagModal();

        tags.map((tag) => console.log("tagName " + tag.tagName));
    };

    // ***********Everything Tags Related End***********

    // ***********Everything Building Related Start***********
    const [buildingArray, setBuildingArray] = React.useState({
        "SOE": {
            "Level 1": [],
            "Level 2": [],
            "Level 3": []
        },
        "SCIS": {
            "Level 1": [],
            "Level 2": [],
            "Level 3": []
        }   
    });
    const [buildingName, setBuildingName] = React.useState("");
    const [numberSection, setNumberSection] = React.useState("");
    const [sectionNames, setSectionNames] = React.useState([]);
    
    const [
        openedBuildingModal,
        { open: openBuildingModal, close: closeBuildingModal },
    ] = useDisclosure(false);

    const onSaveBuilding = () => {
        let sections = {}
        for (let sectionName of sectionNames){
            console.log(sectionName);
            sections[sectionName] = []
        }
        setBuildingArray({
            ...buildingArray, 
            [buildingName]: sections  
        })
        setBuildingName("");
        setNumberSection("");
        setSectionNames([]);
        closeBuildingModal();
    };
    // console.log(buildingArray)

    return (
        <div className="maincontainer">
            {/* ************Sidebar Start************* */}
            <div className="sidebar">
                <TreeView
                    aria-label="icon expansion"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{
                        height: 240,
                        flexGrow: 1,
                        maxWidth: 400,
                        overflowY: "auto",
                        color: "#457497",
                    }}
                >
                    <div>
                        {Object.keys(buildingArray).map(nameOfBuilding => (
                            <CustomTreeItemBuilding key={nameOfBuilding} nameOfBuilding={nameOfBuilding} nameOfSections={buildingArray[nameOfBuilding]} />
                        ))}
                    </div>
                </TreeView>
                <Button
                    style={{
                        // "margin-right": "100px",
                        textTransform: "none",
                        borderColor: "red",
                        width: "130px",
                        backgroundColor: "#9DBFD8",
                        borderRadius: "50px",
                        color: "white",
                        height: "30px",
                        alignSelf: "flex-end",
                        marginRight: "10px",
                    }}
                    onClick={openBuildingModal}
                >
                    + Add Building
                </Button>
            </div>
            {/* *********Sidebar End******************* */}
            <div className="rightside">
                <div className={tagView ? "tagcontainer" : "tagcontainerhide"}>
                    {tags.map((tag) => (
                        <CustomizationCard
                            tagName={tag.tagName}
                            startTime={tag.startTime}
                            endTime={tag.endTime}
                            bookingAmount={tag.bookingAmount}
                            minStudents={tag.minStudents}
                            allowEarlyCheckout={tag.allowEarlyCheckout}
                            description={tag.description}
                            // tag
                        />
                    ))}
                    <div className="addtagbutton">
                        <Button
                            variant="contained"
                            sx={{
                                color: "white",
                                "background-color": "#9dbfd8",
                                width: "400px",
                                marginLeft: "45px",
                            }}
                            onClick={openTagModal}
                        >
                            + Add more tags
                        </Button>
                    </div>
                </div>
                <div
                    className={
                        buildingView
                            ? "buildingcontainer"
                            : "buildingcontainerhide"
                    }
                >
                    <SectionUnlocking />
                </div>
            </div>

            {/* *********AddTag Modal*************** */}
            <Modal
                opened={openedTagModal}
                onClose={closeTagModal}
                withCloseButton={false}
                size="70%"
                title="Input Fields Below"
                overlayProps={{ borderRadius: "30px" }}
                centered
            >
                <div className="inputcontainer">
                    <div className="inputrow">
                        <div className="inputname1">
                            <p>
                                Name of Tag
                                <HoverCard width={280} shadow="md">
                                    <HoverCard.Target>
                                        <InfoIcon
                                            fontSize="small"
                                            style={{ color: "darkgray" }}
                                        />
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown>
                                        <p>
                                            All facilities with this tag will
                                            have these rules applied.
                                        </p>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </p>
                        </div>
                        <div>
                            <TextInput
                                // withAsterisk
                                // required
                                // error="both below the input"
                                className="inputsmall"
                                icon={<MeetingRoomIcon />}
                                placeholder="Tag"
                                value={tagName}
                                onChange={(e) => {
                                    setTagName(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="inputname2">
                            <p>
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
                                            Bookers can only book these
                                            facilities within the allowed time.
                                        </p>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </p>
                        </div>

                        {/* <TimePicker /> */}
                        <TimeInput
                            icon={<IconClock size="1rem" stroke={1.5} />}
                            maw={400}
                            mx="auto"
                            value={startTime}
                            onChange={(e) => {
                                setStartTime(e.target.value);
                            }}
                            description="Start Time"
                            style={{ margin: "10px" }}
                        />
                        <TimeInput
                            icon={<IconClock size="1rem" stroke={1.5} />}
                            maw={400}
                            mx="auto"
                            value={endTime}
                            onChange={(e) => {
                                setEndTime(e.target.value);
                            }}
                            description="End Time"
                            style={{ margin: "10px" }}
                        />
                    </div>
                    <div className="inputrow">
                        <div className="inputname3">
                            <p>
                                Booking Amount{" "}
                                <HoverCard width={280} shadow="md">
                                    <HoverCard.Target>
                                        <InfoIcon
                                            fontSize="small"
                                            style={{ color: "darkgray" }}
                                        />
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown>
                                        <p>
                                            Cost of booking this facility for
                                            one 1 hour.
                                        </p>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </p>
                        </div>
                        <div>
                            <Input
                                className="inputsmall"
                                icon={<PaidIcon />}
                                placeholder="Amount per hour"
                                value={booking}
                                onChange={(e) => {
                                    setBooking(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="inputname4">
                            <p>
                                Minimum Students Needed{" "}
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
                        <div>
                            <Input
                                className="inputsmall"
                                icon={<PeopleIcon />}
                                placeholder="Number"
                                value={students}
                                onChange={(e) => {
                                    setStudents(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="inputname6">
                            <p>
                                Allow Early Checkout{" "}
                                <HoverCard width={280} shadow="md">
                                    <HoverCard.Target>
                                        <InfoIcon
                                            fontSize="small"
                                            style={{ color: "darkgray" }}
                                        />
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown>
                                        <p>
                                            Selecting this option wll allow
                                            users to checkout of a facility
                                            early.
                                        </p>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </p>
                        </div>
                        <div>
                            <Switch
                                onClick={() => {
                                    setAllowEarlyCheckout(!allowEarlyCheckout);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="inputname5">
                            <p>Room Description</p>
                        </div>
                        <div>
                            <Input
                                className="inputlarge"
                                placeholder="Description"
                                styles={{ width: "200px" }}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="submitrow">
                        <div className="inputname5">
                            <Button
                                variant="text"
                                style={{
                                    // "margin-right": "100px",
                                    textTransform: "none",
                                    color: "grey",
                                }}
                                onClick={() => {
                                    alert("This is for future implementation!");
                                }}
                            >
                                Add more Rules
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="outlined"
                                style={{
                                    // "margin-right": "100px",
                                    textTransform: "none",
                                    color: "grey",
                                }}
                                onClick={() => {
                                    // alert("clicked");
                                    onSaveTag();
                                }}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </Modal>
            {/* *********AddBuilding Modal*************** */}
            <Modal
                opened={openedBuildingModal}
                onClose={closeBuildingModal}
                withCloseButton={false}
                size="50%"
                title="Add Building"
                overlayProps={{ borderRadius: "30px" }}
                centered
            >
                <div className="inputcontainer">
                    <div className="inputrow">
                        <div className="inputname7">
                            <p>Building Name</p>
                        </div>
                        <div>
                            <TextInput
                                // withAsterisk
                                // required
                                // error="both below the input"
                                className="inputsmall"
                                icon={<DomainAddIcon />}
                                placeholder="Name"
                                value={buildingName}
                                onChange={(e) => {
                                    setBuildingName(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="inputrow">
                        <div className="inputname8">
                            <p style={{}}>Number of Sections</p>
                        </div>

                        <TextInput
                            className="inputsmall"
                            icon={<MeetingRoomIcon />}
                            placeholder="Number of Sections"
                            value={numberSection}
                            max={10}
                            type="number"
                            onChange={(e) => {
                                setNumberSection(e.target.value);
                            }}
                        />
                    </div>

                    <div className="sectionname">
                        <p style={{ paddingBottom: "10px" }}>Section Names</p>
                        <div style={{ display: "flex", flexWrap: 'wrap' }}>
                            {Array.from({length: numberSection}, (_,index) => (
                                <TextInput
                                    className="sectionNameInput"
                                    icon={<EditIcon />}
                                    placeholder="Section Name"
                                    type="text"
                                    key={index}
                                    value={sectionNames[index] || ""}
                                    onChange={(e) => {
                                        const newSectionName = [...sectionNames];
                                        newSectionName[index] = e.target.value;
                                        setSectionNames(newSectionName)
                                    }}
                                    style={{ padding: "5px"}}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <Button
                            variant="outlined"
                            style={{
                                // "margin-right": "100px",
                                textTransform: "none",
                                color: "grey",
                                marginTop: "20px",
                            }}
                            onClick={() => {
                                // alert("clicked");
                                onSaveBuilding();
                            }}
                        >
                            Add Building
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
