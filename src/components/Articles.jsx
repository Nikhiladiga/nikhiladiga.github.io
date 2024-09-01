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
import React, { useEffect, useRef, useState } from "react";
import Medium from "../assets/medium.png";
import { motion } from "framer-motion";

const Articles = () => {
  const wasCalled = useRef();
  const [articles, setArticles] = useState([]);
  const { colorMode, _ } = useColorMode();

  useEffect(() => {
    if (wasCalled.current) return;
    wasCalled.current = true;

    const getMediumArticles = async () => {
      const unparsedResult = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nikhiladigaz"
      );
      const parsedResult = await unparsedResult.json();
      const postsWithFixedLinks = parsedResult.items.map((item) => ({
        ...item,
        link: item.link.split("?source")[0],
      }));
      setArticles(postsWithFixedLinks);
    };

    getMediumArticles();
  }, []);

  return (
    <Box marginTop="15rem">
      <Heading paddingLeft="10rem" paddingBottom="6rem">
        My Articles
      </Heading>
      {articles && (
        <SimpleGrid
          justifyItems="center"
          minChildWidth="35rem"
          width="80%"
          gap="2rem"
          mx="auto"
        >
          {articles.map((article) => (
            <Card
              onClick={() => window.open(article.link)}
              as={motion.div}
              cursor="pointer"
              maxW="xxl"
              whileTap={{ scale: 0.9 }}
              bg={colorMode == "dark" ? "#282828" : "#EDF2F7"}
              key={article.guid}
            >
              <CardBody>
                <Image src={Medium} alt="Medium" />
                <Stack mt="6" gap="3">
                  <Heading size="md">{article.title}</Heading>
                  <Text fontSize="small" fontWeight="bold" color="gray.500">
                    {new Date(article.pubDate).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </Text>
                  <Stack direction="row" mt={2}>
                    {article.categories.map((category) => (
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

export default Articles;
