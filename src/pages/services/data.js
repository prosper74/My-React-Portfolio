import {
  UilLayersAlt,
  UilBracketsCurly,
  UilFileCheck,
  UilHeartRate,
} from "@iconscout/react-unicons";

export const data = [
  {
    id: 1,
    icon: <UilLayersAlt size="30" className="ServicesIcon" />,
    serviceTitle: "Web App",
    serviceSubtitle: "Project Planning",
    services: [
      {
        id: 1,
        service: "gather the software requiremnts and analysis",
      },
      {
        id: 2,
        service: "Plan the project",
      },
      {
        id: 3,
        service: "create the Architectural Pattern/Design",
      },
    ],
  },
  {
    id: 2,
    icon: <UilBracketsCurly size="30" className="ServicesIcon" />,
    serviceTitle: "Software Development",
    serviceSubtitle: "Frontend and Backend",
    services: [
      {
        id: 1,
        service:
          "Design frontend app using React js or Next js, with typescript",
      },
      {
        id: 2,
        service: "Develope the backend using Node js/Express js",
      },
      {
        id: 3,
        service:
          "Create database models and routes (MongoDB, MySQL or PostgresSQL)",
      },
      {
        id: 4,
        service: "Create GraphQL and Rest APIs",
      },
    ],
  },
  {
    id: 3,
    icon: <UilFileCheck size="30" className="ServicesIcon" />,
    serviceTitle: "Software Testing",
    serviceSubtitle: "Frontend and Backend",
    services: [
      {
        id: 1,
        service: "Can run unix, Jest, E2E and cypress tests",
      },
      {
        id: 2,
        service: "Create API documentation using Swagger",
      },
      {
        id: 3,
        service:
          "Use eslint and pretier to create clean and maintainable codes",
      },
    ],
  },
  {
    id: 4,
    icon: <UilHeartRate size="30" className="ServicesIcon" />,
    serviceTitle: "Software Maintenance ",
    serviceSubtitle: "Version Control",
    services: [
      {
        id: 1,
        service: "Can run unix, Jest, E2E and cypress tests",
      },
      {
        id: 2,
        service: "Create API documentation using Swagger",
      },
      {
        id: 3,
        service:
          "Use eslint and pretier to create clean and maintainable codes",
      },
    ],
  },
];
