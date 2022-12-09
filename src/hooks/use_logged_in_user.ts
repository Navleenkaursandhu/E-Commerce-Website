import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"
export const useLoggedInUser = () => {
  return useLiveQuery(async () => {
    const data = await db.loginSession.toArray()
    if (data[0] && data[0].expiryTimestamp > new Date().getTime()) {
      const userData = data[0] && await db.user.where({ id: data[0].userId }).toArray()
      return userData[0]
    }
  })
}
