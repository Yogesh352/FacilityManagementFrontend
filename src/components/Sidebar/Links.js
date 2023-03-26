import {
  DashboardIcon,
  ChatIcon,
  TodoIcon,
  ContactsIcon,
  ReportsIcon,
  MetricsIcon,
  RulesIcon,
} from "../Icon/index";

export const links = [
  {
    title: "Statistics",
    links: [
      {
        name: "dashboard",
        to: "dashboard",
        icon: <DashboardIcon />,
      },

      {
        name: "detailed metrics",
        to: "detailedmetrics",
        icon: <MetricsIcon />,
      },
      {
        name: "summary report",
        to: "summaryreport",
        icon: <ReportsIcon />,
      },
    ],
  },
  {
    title: "Tasks",
    links: [
      {
        name: "Task List",
        to: "tasklist",
        icon: <TodoIcon />,
      },
    ],
  },

  {
    title: "Customization",
    links: [
      {
        name: "rules",
        to: "rules",
        icon: <RulesIcon />,
      },
    ],
  },
];
