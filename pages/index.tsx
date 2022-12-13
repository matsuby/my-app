import NextLink from "next/link";
import { Heading, Link, VStack } from "@chakra-ui/react";

export default function IndexPage() {
  return (
    <VStack>
      <Heading>Layout examples</Heading>
      <Link as={NextLink} href="/flex">
        Flex Layout
      </Link>
      <Link as={NextLink} href="/grid">
        Grid Layout
      </Link>
    </VStack>
  );
}
