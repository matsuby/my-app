import { Center, Heading, Link, Text } from "@chakra-ui/react";

export default function AirbnbPage() {
  return (
    <>
      <Center h="64px" bgColor="blackAlpha.50" gap="8px">
        <Heading fontSize="md">合計金額をはっきり表示</Heading>
        <Link href="#" textDecoration="underline">
          <Text fontSize="md" fontWeight="bold">
            さらに詳しく
          </Text>
        </Link>
      </Center>
    </>
  );
}
