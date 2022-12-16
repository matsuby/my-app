import NextLink from "next/link";
import { Heading, HStack, Link, VStack } from "@chakra-ui/react";

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
      <HStack>
        <Link as={NextLink} href="/airbnb">
          Trace Airbnb
        </Link>
        <Link href="https://www.airbnb.jp/" target="_blank">
          (airbnb.jp)
        </Link>
      </HStack>
    </VStack>
  );
}
