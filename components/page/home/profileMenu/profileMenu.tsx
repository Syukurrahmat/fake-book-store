import LimitationModal from '@/components/core/limitation'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    useToast,
    useDisclosure
} from '@chakra-ui/react'
import { IconLogout, IconSettings2, IconUser } from '@tabler/icons-react'
import Favorite from '../../../core/favorite'

export default function ProfileMenu() {
    const featureLimitation = useDisclosure()

    return (
        <Menu >
            <MenuButton>
                <Avatar size='sm' bg='blue.500' />
            </MenuButton>
            <MenuList>
                <Favorite  />
                <MenuItem onClick={featureLimitation.onOpen} icon={<IconSettings2 size='18' />}>Setting</MenuItem>
                <MenuItem onClick={featureLimitation.onOpen} icon={<IconUser size='18' />}>Akun</MenuItem>
                <MenuItem onClick={featureLimitation.onOpen} icon={<IconLogout size='18' />}>Log out</MenuItem>
            </MenuList>
            <LimitationModal disclosure={featureLimitation}/>
        </Menu>
    )
}