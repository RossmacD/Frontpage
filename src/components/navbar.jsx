import { useContext, useEffect } from 'react'
import { Menu } from '@fluentui/react-northstar'
import { LOGIN_PATH, HOME_PATH, REGISTER_PATH } from '../routes/routes';
import { Link } from 'react-router-dom'
import { UserContext } from './App/App'
import { LOGOUT } from './App/authReducer';

const Navbar = () => {
    const { selfState: { auth }, dispatch } = useContext(UserContext)
    const handleLogout = () => {
        // ADD fetch here!


        dispatch({ type: LOGOUT })
    }

    return (
        <Menu defaultActiveIndex={0} >
            <Menu.Item index={0}>
                <Link to={HOME_PATH}>
                    <Menu.ItemContent>
                        Home
                </Menu.ItemContent>
                </Link>
            </Menu.Item>
            {!auth ? (
                <>
                    <Menu.Item index={1}>
                        <Link to={LOGIN_PATH}>
                            <Menu.ItemContent>
                                Login
                                </Menu.ItemContent>
                        </Link>
                    </Menu.Item>
                    <Menu.Item index={2}>
                        <Link to={REGISTER_PATH}>
                            <Menu.ItemContent>
                                Register
                                </Menu.ItemContent>
                        </Link>
                    </Menu.Item>
                </>
            ) : (
                    <>
                        <Menu.Item index={1}>
                            <Link to={'/articles/new'}>
                                <Menu.ItemContent>
                                    Create Article
                                </Menu.ItemContent>
                            </Link>
                        </Menu.Item>
                        <Menu.Item index={2}>
                            <Menu.ItemContent onClick={handleLogout}>Logout</Menu.ItemContent >
                        </Menu.Item>
                    </>
                )}

        </Menu>
    )
}

export default Navbar;