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
                <Menu.ItemContent>
                    <Link to={HOME_PATH}>
                        Home
                    </Link>
                </Menu.ItemContent>
            </Menu.Item>
            {!auth ? (
                <>
                    <Menu.Item index={1}>
                        <Menu.ItemContent>
                            <Link to={LOGIN_PATH}>
                                Login
                    </Link>
                        </Menu.ItemContent>
                    </Menu.Item>
                    <Menu.Item index={2}>
                        <Menu.ItemContent>
                            <Link to={REGISTER_PATH}>
                                Register
                    </Link>
                        </Menu.ItemContent>
                    </Menu.Item>
                </>
            ) : (<Menu.Item index={3}>
                <Menu.ItemContent onClick={handleLogout}>Logout</Menu.ItemContent >
            </Menu.Item>)}

        </Menu>
    )
}

export default Navbar;