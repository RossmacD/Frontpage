import { Menu } from '@fluentui/react-northstar'

const Navbar = () => {
    return (
        <Menu defaultActiveIndex={0} >
            <Menu.Item index={0}>
                <Menu.ItemContent>Home</Menu.ItemContent>
            </Menu.Item>
            <Menu.Item index={1}>
                <Menu.ItemContent>Login</Menu.ItemContent>
            </Menu.Item>
            <Menu.Item index={2}>
                <Menu.ItemContent>Register</Menu.ItemContent>
            </Menu.Item>
            <Menu.Item index={3}>
                <Menu.ItemContent>Logout</Menu.ItemContent>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;