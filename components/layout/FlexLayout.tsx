import NextLink from "next/link";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

type FlexLayoutProps = {
  children: React.ReactNode;
};

export const FlexLayout: React.FC<FlexLayoutProps> = ({ children }) => {
  return (
    <Flex minH="100vh" direction="column">
      <Box as="header" bgColor="red.100">
        <Link as={NextLink} href="/">
          <Heading size="md">header</Heading>
        </Link>
      </Box>

      <Flex flexGrow={1} direction={{ base: "column", md: "row" }}>
        <Box as="nav" bgColor="blue.100" flexBasis={{ md: "12em" }}>
          nav
        </Box>
        <Box as="main" bgColor="green.100" flexGrow={1}>
          {children}
        </Box>
        <Box
          as="aside"
          bgColor="yellow.100"
          flexBasis={{ md: "12em" }}
          flexGrow={{ base: 1, md: 0 }}
        >
          aside
        </Box>
      </Flex>

      <Box as="footer" bgColor="red.100">
        footer
      </Box>
    </Flex>
  );
};
