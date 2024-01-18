import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../pages/home"
import New from "../pages/new"
import Profile from "../pages/profile"
import Search from "../pages/search"
import Inbox from "../pages/inbox"

const Tab = createBottomTabNavigator()

function Routes() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" children={Home} />
            <Tab.Screen name="Search" children={Search} />
            <Tab.Screen name="New" children={New} />
            <Tab.Screen name="Inbox" children={Inbox} />
            <Tab.Screen name="Profile" children={Profile} />  
        </Tab.Navigator>
    )
}

export default Routes