import Icon from "@chakra-ui/core/dist/Icon";
import { Box, Stack, Text, Link } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small"> GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link>
                            <Icon as={RiDashboardLine} fontSize="25" />
                            <Text ml="4" fontWeight="medium"> Dashboard</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}