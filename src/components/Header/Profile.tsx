import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Minguim</Text>
          <Text color="gray.300" fontSize="smaill">
            thiago.minguim@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Thiago Melo"
        src="https://github.com/ThiagoMinguim.png"
      />
    </Flex>
  )
}
