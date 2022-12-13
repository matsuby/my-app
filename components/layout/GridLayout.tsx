import NextLink from "next/link";
import { Box, Grid, Heading, Link } from "@chakra-ui/react";

type GridLayoutProps = {
  children: React.ReactNode;
};

export const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      gridTemplateAreas={{
        base: `
          "header"
          "nav"
          "main"
          "aside"
          "footer"  
        `,
        md: `
          "header header header"
          "nav main aside"
          "footer footer footer"
        `,
      }}
      gridTemplateRows={{
        base: "auto auto 1fr 1fr auto",
        md: "auto 1fr auto",
      }}
      gridTemplateColumns={{
        base: "1fr",
        md: "12em 1fr 12em",
      }}
    >
      <Box as="header" bgColor="red.100" gridArea="header">
        <Link as={NextLink} href="/">
          <Heading size="md">header</Heading>
        </Link>
      </Box>

      <Box as="nav" bgColor="blue.100" gridArea="nav">
        nav
      </Box>

      <Box as="main" bgColor="green.100" gridArea="main">
        {children}
      </Box>

      <Box as="aside" bgColor="yellow.100" gridArea="aside">
        aside
      </Box>

      <Box as="footer" bgColor="red.100" gridArea="footer">
        footer
      </Box>
    </Grid>
  );
};
