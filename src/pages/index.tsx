import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../../src/components/Form/Input'

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="10" borderRadius={8} flexDir="column">

        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail"></Input>
          <Input type="password" name="password" label="Senha"></Input>
        </Stack>

        <Button border="none" type="submit" mt="6" w="100%" colorScheme="pink" size="lg"> Entrar </Button>
      </Flex>
    </Flex >
  )
}
