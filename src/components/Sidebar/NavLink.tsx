import { Link, Icon, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiDashboardLine } from 'react-icons/ri'

interface NavLinkProps {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
