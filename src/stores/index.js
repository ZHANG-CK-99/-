import {useNavStore} from './modules/Navgate.js'
import {useUserRole} from './modules/userRoles.js'
export default function useStore() {
    return {
        navUser:useNavStore(),
        userRole:useUserRole()
    }
}
