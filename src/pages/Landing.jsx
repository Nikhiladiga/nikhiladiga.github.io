import React from "react";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import Articles from "../components/Articles";
import {
  chakra,
  Flex,
  Heading,
  List,
  ListItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Nikhil from "../assets/nikhil.png";
import { Typewriter } from "react-simple-typewriter";

const Landing = () => {
  return (
    <Box>
      <Topbar />
      <Box className="child">
        <Flex
          width="100%"
          height="90vh"
          gap={24}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            src={Nikhil}
            alt="Nikhil"
          />
          <Flex
            flexDirection={"column"}
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <Text fontSize="2xl" fontWeight="bold">
              Hi there!
            </Text>
            <Heading display={"flex"} alignItems={"center"} fontSize="6xl">
              I'm
              <Text
                marginLeft={3}
                marginRight={3}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="bold"
              >
                Nikhil Adiga
              </Text>
              <motion.div
                animate={{
                  rotate: [0, 10, 0, 0, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                👋
              </motion.div>
            </Heading>
            <Text
              bgGradient="linear(to-l, #42D392, #647EFF)"
              bgClip="text"
              fontWeight="bold"
              fontSize="3xl"
            >
              <Typewriter
                cursor
                loop
                cursorBlinking
                words={[
                  "Software Engineer",
                  "Web Developer",
                  "Android Application Developer",
                  "iOS Application Developer",
                  "Devops Engineer",
                  "Singer",
                  "Badminton player",
                ]}
              >
                Software Engineer
              </Typewriter>
            </Text>
            <Text marginTop={2}>
              Welcome to my portfolio. A little bit about me:
            </Text>
            <List marginTop={2} lineHeight={2}>
              <ListItem>
                👨‍💻 Lead Software Engineer{" "}
                <chakra.span color="blue.500">@ Sclera</chakra.span>
              </ListItem>
              <ListItem>
                🧑‍🎓 Studied Information Science & Engineering{" "}
                <chakra.a color="blue.500">
                  @ N.M.A.M Institute of Technology
                </chakra.a>
              </ListItem>
              <ListItem>🎤 Semi-professional singer</ListItem>
              <ListItem>🏸 Self proclaimed badminton expert</ListItem>
            </List>
          </Flex>
        </Flex>
        <Experience />
        <Projects />
        <Articles />
      </Box>
      <Footer />
    </Box>
  );
};

export default Landing;
