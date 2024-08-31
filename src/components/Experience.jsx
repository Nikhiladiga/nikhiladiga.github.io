import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import Sclera from "../assets/sclera.png";
import ARL from "../assets/arl.png";
import Nitte from "../assets/nitte.png";
import {
  MdMenuBook,
  MdOutlineCases,
  MdCheckCircle,
  MdStar,
} from "react-icons/md";

const Experience = () => {
  const { colorMode, _ } = useColorMode();
  return (
    <Box marginTop="30rem">
      <Heading paddingLeft="10rem" paddingBottom="10rem">
        My Experience
      </Heading>
      <VerticalTimeline lineColor={colorMode == "dark" ? "#fff" : "#282828"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#EDF2F7", color: "#121212" }}
          contentArrowStyle={{ borderRight: "7px solid #EDF2F7" }}
          date="Aug 2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineCases />}
        >
          <Image src={Sclera} paddingBottom={3} />
          <Heading paddingBottom={3}>Lead Software Engineer</Heading>
          <List lineHeight={1.5}>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Architected features, ensuring scalability and performance, and
              mentored junior developers.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Built a highly scalable search API using Typesense to efficiently
              search millions of products.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Engaged with Fortune 500 clients to understand their needs and
              develop tailored solutions.{" "}
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Created a serverless solution to automate floorplan image
              analysis, reducing manual labor by 70%.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Designed an end-to-end RAG pipeline for a domain-specific
              intelligent chatbot with multi-modal responses.
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#EDF2F7", color: "#121212" }}
          contentArrowStyle={{ borderRight: "7px solid #EDF2F7" }}
          date="Aug 2021 - Aug 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineCases />}
        >
          <Image src={Sclera} paddingBottom={3} />
          <Heading paddingBottom={3}>Sr. Software Engineer</Heading>
          <List lineHeight={1.5}>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Co-developed a patented P2P protocol to enable direct connections
              to remote hardware devices without port forwarding. Created
              desktop apps using JavaFX for Windows, Ubuntu, and macOS to
              implement the P2P protocol via VPN.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Developed a highly scalable API to onboard assets from Excel
              sheets, processing large datasets efficiently and monitoring
              system resources.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Deployed Spring Boot microservices on AWS EC2 instances using
              technologies like Eureka, VPC, and NGINX.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Led a team of 4 junior developers in building mobile apps for
              Sclera on Android and iOS. The apps are successfully deployed on
              the Play Store and App Store and are used by Fortune 500 companies
              like JLL.
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - Aug 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#EDF2F7", color: "#121212" }}
          contentArrowStyle={{ borderRight: "7px solid #EDF2F7" }}
          icon={<MdOutlineCases />}
        >
          <Image src={ARL} pb={3} />
          <Heading pb={3}>Software Engineer</Heading>
          <List lineHeight={1.5}>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Independently designed and developed a comprehensive API and UI
              using React for the front end and Spring Boot with MySQL for the
              backend to configure the entire network configuration of the
              hardware using netplan
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Developed APIs for various network tools like Remote Access, SSH,
              Telnet, Speedtest, Ping, nslookup, and traceroute.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Utilized WebSocket protocol (STOMP) to provide real-time alerts to
              users.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Deployed Gitlab Community edition in an AWS EC2 instance in-house
              using AWS EFS for backup, CloudWatch for monitoring, custom
              Route53 domain and integrated with MS Teams for notifications.
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - June 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#EDF2F7", color: "#121212" }}
          contentArrowStyle={{ borderRight: "7px solid #EDF2F7" }}
          icon={<MdOutlineCases />}
        >
          <Image src={ARL} pb={3} />
          <Heading pb={3}>Intern</Heading>
          <List lineHeight={1.5}>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Successfully developed a custom kiosk system on Ubuntu,
              incorporating React with Redux, react-router, etc for frontend
              rendering and systemctl services for backend operations.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Utilized Docker to efficiently manage and isolate various services
              like Node.js and MySQL.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Utilized WebSocket protocol (STOMP) to provide real-time alerts to
              users.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Developed a robust Node.js express server for the hardware,
              responsible for collecting sensor data and pushing it to a cloud
              server.
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - June 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "#EDF2F7", color: "#121212" }}
          contentArrowStyle={{ borderRight: "7px solid #EDF2F7" }}
          icon={<MdMenuBook />}
        >
          <Image src={Nitte} pb={3} />
          <Heading pb={3}>Student</Heading>
          <List lineHeight={1.5}>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Worked on equipment management system application using Django,
              React, MySQL for medical college under guidance of staff.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Was an active member of Stereo club and participated in various
              cultural activities.
            </ListItem>
            <ListItem pb={2}>
              <ListIcon as={MdCheckCircle} />
              Participated in multiple hackathons and webinars.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} />
              Secured 8.2 GPA.
            </ListItem>
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStar />}
        />
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
