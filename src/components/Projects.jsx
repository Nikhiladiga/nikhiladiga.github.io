import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Badge,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Medium from "../assets/medium.png";
import { motion } from "framer-motion";
import { projectData } from "../data/projects";

const Projects = () => {
  const [projects, __] = useState(projectData);
  const { colorMode, _ } = useColorMode();

  return (
    <Box marginTop="10rem">
      <Heading paddingLeft="10rem" paddingBottom="6rem">
        My Work
      </Heading>
      {projects && (
        <SimpleGrid
          justifyItems="center"
          minChildWidth="35rem"
          width="80%"
          gap="2rem"
          mx="auto"
        >
          {projects.map((project) => (
            <Card
              maxW="xxl"
              bg={colorMode == "dark" ? "#282828" : "#EDF2F7"}
              key={project.title}
            >
              <CardBody>
                <Image src={project.media} alt="Project Media" />
                <Stack mt="6" gap="3">
                  <Heading size="md">{project.title}</Heading>
                  <Text fontSize="medium" fontWeight="medium">
                    {project.description}
                  </Text>
                  <Text fontSize="small" fontWeight="bold" color="gray.500">
                    {project.date}
                  </Text>
                  <Stack direction="row" mt={2}>
                    {project.tags.map((category) => (
                      <Badge
                        key={category}
                        colorScheme="green"
                        borderRadius="1rem"
                        paddingLeft="0.5rem"
                        paddingRight="0.5rem"
                        paddingTop="0.3rem"
                        paddingBottom="0.3rem"
                      >
                        {category}
                      </Badge>
                    ))}
                  </Stack>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Projects;
