import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};
