import FidenzLogo from "../../src/assets/images/images/FidenzLogo.png";
import Invicon from "../../src/assets/images/images/Invicon.png";
import Servenet from "../../src/assets/images/images/Servenet.png";
import CustKonnect from "../../src/assets/images/images/CustKonnect.png";
import Snapcraft from "../../src/assets/images/images/Snapcraft.png";
import Weathersphere from "../../src/assets/images/images/Weathersphere.png";
import Resto from "../../src/assets/images/images/Resto.png";

export const experienceList = [
  {
    company: "Fidenz Technologies",
    logo: FidenzLogo,
    link: "https://fidenz.com/",
    position: "Software Engineer",
    duration: "January 2025 - Present",
    skills: ["React", ".NET Core", "Typescript", "Tailwind", "MS SQL Server", "TSQL", "SSIS", "Docker", "Kafka", "CI/CD", "AWS"],
  },
  {
    company: "Fidenz Technologies",
    logo: FidenzLogo,
    link: "https://fidenz.com/",
    position: "Associate Software Engineer",
    duration: "November 2023 - December 2024",
    skills: ["React", ".NET Core", "Typescript", "Tailwind", "MS SQL Server", "SSIS", "Docker", "Kafka", "AWS"],
  },
  {
    company: "Fidenz Academy",
    logo: FidenzLogo,
    link: "https://fidenz.com/",
    position: "Trainee Software Engineer",
    duration: "September 2023 - November 2023",
    skills: [
      "React",
      ".NET Core",
      "Javascript",
      "PostgreSQL",
      "Clean Architecture",
      "MVC",
      "N-Tier",
      "Auth0",
      "Bootstrap"
    ],
  },
];

export const projectList = [
  {
    logo: Invicon,
    projectName: "Invicon",
    projectDescription: "API for manage large scaled inventories in warehouses with the use of .NET best practices.",
    link: "https://github.com/PraveenChamod/Inventory_Control_System",
    technologies: [".NET Core", "EF Core", "JWT", "pgAdmin4", "N-Tier", "AWS", "EC2", "Docker"],
  },
  {
    logo: Servenet,
    projectName: "ServeNet",
    projectDescription: "Educational domain API development with familiarise the use of spring boot framework in Java.",
    link: "https://github.com/PraveenChamod/Service_Provider_Platform_API",
    technologies: ["Java", "Springboot", "Hibernate", "JWT", "MVC"],
  },
  {
    logo: CustKonnect,
    projectName: "CustKonnect",
    projectDescription: "Backend web server to manage customers' data that implemented with the use of Three-Tier Architecture.",
    link: "https://github.com/PraveenChamod/Customer_Data_API",
    technologies: ["C#", ".NET Core", "MS SQL Server", "REST API", "JWT", "N-Tier"],
  },
  {
    logo: Snapcraft,
    projectName: "SnapCraft",
    projectDescription: "Responsive and Pixel Perfect website development with the use of ‘PerfectPixel’ Google extension.",
    link: "https://landing-pages-xi.vercel.app/",
    technologies: ["HTML5", "CSS", "Vanila JS", "PerfectPixel", "Photopea"],
  },
  {
    logo: Weathersphere,
    projectName: "WeatherSphere",
    projectDescription: "Web application to get in touch with weather information that implemented with Auth0 authentication & OpenWeatherMap API ",
    link: "https://github.com/PraveenChamod/Weather_Info_App",
    technologies: ["React", "Redux", "CSS", "OpenWeatherMap API", "Autho"],
  },
  {
    logo: Resto,
    projectName: "Resto",
    projectDescription: "An platform Automated restaurant operations with multi-user access. Collaborative development project in university",
    link: "https://github.com/PraveenChamod/Restaurant_Internal_Process_Mangement_System",
    technologies: ["MERN", "Flutter", "JWT", "Stripe", "Material UI", "Andriod Studio"],
  }
];
