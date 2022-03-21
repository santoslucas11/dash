import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export default function Header() {
    return (
        <Flex as="header" w="100%" h="20" maxWidth={1480} mx="auto" mt="4" px="6" align="center">
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" >
                CRM BeCapital
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bgColor="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    bgColor="gray.800"
                    variant="unstyled"
                    border="none"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ bgColor: "gray.800" }}
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="4"
                    mx="8"
                    pr="8"
                    py="6"
                    color="gray.300"
                    borderRightWidth="1"
                    borderColor="pink.700"
                >
                    <Icon as={RiNotificationLine} fontSize="25" />
                    <Icon as={RiUserAddLine} fontSize="25" />
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text mb="5">Lucas Rocha</Text>
                        <Text mt="-5" color="gray.300" fontSize="small">santoslucas.dev@gmail.com</Text>
                    </Box>

                    <Avatar size="lg" name="Lucas Rocha" src="https://github.com/santoslucas11.png" />
                </Flex>
            </Flex>
        </Flex>
    )
}