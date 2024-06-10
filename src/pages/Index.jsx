import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Header = () => (
  <Box bg="gray.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" fontSize="lg" display="flex" alignItems="center">
            <FaHome style={{ marginRight: "8px" }} /> Home
          </Link>
          <Link href="#" fontSize="lg" display="flex" alignItems="center">
            <FaNewspaper style={{ marginRight: "8px" }} /> News
          </Link>
          <Link href="#" fontSize="lg" display="flex" alignItems="center">
            <FaInfoCircle style={{ marginRight: "8px" }} /> About
          </Link>
          <Link href="#" fontSize="lg" display="flex" alignItems="center">
            <FaPhone style={{ marginRight: "8px" }} /> Contact
          </Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box bg="gray.800" color="white" py={4} mt={10}>
    <Container maxW="container.xl">
      <Flex justify="space-between" wrap="wrap">
        <Link href="#" fontSize="sm">
          Terms of Service
        </Link>
        <Link href="#" fontSize="sm">
          Privacy Policy
        </Link>
        <Link href="#" fontSize="sm">
          Advertise with us
        </Link>
        <Link href="#" fontSize="sm">
          Contact
        </Link>
      </Flex>
    </Container>
  </Box>
);

const FeaturedArticles = () => (
  <Box py={10}>
    <Heading as="h2" size="xl" mb={6}>
      Featured Articles
    </Heading>
    <VStack spacing={8} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Article 1</Heading>
        <Text mt={4}>This is a summary of the first featured article.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Article 2</Heading>
        <Text mt={4}>This is a summary of the second featured article.</Text>
      </Box>
    </VStack>
  </Box>
);

const LatestNews = () => (
  <Box py={10}>
    <Heading as="h2" size="xl" mb={6}>
      Latest News
    </Heading>
    <VStack spacing={8} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">News 1</Heading>
        <Text mt={4}>This is a summary of the first news item.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">News 2</Heading>
        <Text mt={4}>This is a summary of the second news item.</Text>
      </Box>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Box bg="#f3f2ee">
      <Header />
      <Container maxW="container.xl" py={10}>
        <FeaturedArticles />
        <LatestNews />
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;