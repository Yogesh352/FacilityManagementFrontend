import {
  Stack,
  List,
  Container,
  Table,
  Box,
  createStyles,
  ScrollArea,
  rem,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "../Icon/index";
import ReactPDF from "@react-pdf/renderer";
// import Report from './Report';
// import * as ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
// import PdfRender from './PdfRender';
import pdf from "./Report.pdf";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const PdfLists = ({ values }) => {
  const [data, setData] = useState(values);
  useEffect(() => {
    setData(values);
  }, [values]);
  const rows = data.map((element) => (
    <tr key={element.name}>
      <td className="w-[95%]">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="block py-2 font-semibold"
        >
          Summary Report for {months[element.month]} {element.year}
        </a>
      </td>
      <td className="w-[5%]">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="block py-2 font-semibold"
        >
          <DownloadIcon />
        </a>
      </td>
    </tr>
  ));
  console.log(values);

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <Box className="overflow-scroll scrollbar-hide w-full h-[95%]">
      <ScrollArea
        h={300}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table className="border-2  w-full border-gray-300 rounded-lg h-[95%]">
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              <th>Report</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
};

export default PdfLists;

//  {/* <Container className="bg-trnasparent w-full p-0">
//                 {values.map((item) => (
//                     <a href={pdf} target="_blank" rel="noreferrer" className="block underline pt-5 border-b font-semibold">
//                         Summary Report for {months[item.month]} {item.year}
//                         <DownloadIcon className="inline float-right"/>
//                     </a>
//                     )
//                 )}
//             </Container> */}
