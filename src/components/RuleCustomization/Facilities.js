import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import React from "react";

export const facilities = [
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "SOE",
    isBuilding: true,
    items: [
      {
        title: "Level 1",
        isLevel: true,
        ml: 4,
        rules: {
          availability: ["1200", "1700"],
          bookingAmount: 50,
          minStudents: 3,
          earlyCheckout: true,
          roomDescription: "This room is very nice",
        },
        items: [
          {
            title: "GSRs",
            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
          {
            title: "Study Rooms",
            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
        ],
      },
      {
        title: "Level 2",
        isLevel: true,
        ml: 4,
        rules: {
          availability: ["1200", "1700"],
          bookingAmount: 50,
          minStudents: 3,
          earlyCheckout: true,
          roomDescription: "This room is very nice",
        },
        items: [
          {
            title: "GSRs",
            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
          {
            title: "Study Rooms",
            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
        ],
      },
    ],
  },
  {
    icon: <LocalLibraryOutlinedIcon />,
    title: "SOB",
    isBuilding: true,
    items: [
      {
        title: "Level 1",
        isLevel: true,
        ml: 4,
        rules: {
          availability: ["1200", "1700"],
          bookingAmount: 50,
          minStudents: 3,
          earlyCheckout: true,
          roomDescription: "This room is very nice",
        },
        items: [
          {
            title: "GSRs",

            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
          {
            title: "Study Rooms",

            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
        ],
      },
      {
        title: "Level 2",
        isLevel: true,
        ml: 4,
        rules: {
          availability: ["1200", "1700"],
          bookingAmount: 50,
          minStudents: 3,
          earlyCheckout: true,
          roomDescription: "This room is very nice",
        },
        items: [
          {
            title: "GSRs",

            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
          {
            title: "Study Rooms",

            ml: 8,
            text: "sm",
            rules: {
              availability: ["1200", "1700"],
              bookingAmount: 50,
              minStudents: 3,
              earlyCheckout: true,
              roomDescription: "This room is very nice",
            },
          },
        ],
      },
    ],
  },
];
