import { createContext, useContext } from 'react'
import ActivityStore from './activityStore'
import CommentStore from './commentStore'
import CommonStore from './commonStore'
import ModalStore from './modalStore'
import profileStore from './profileStore'
import UserStore from './userStore'

interface Store {
  activityStore: ActivityStore
  commonStore: CommonStore
  userStore: UserStore
  modalStore: ModalStore
  profileStore: profileStore
  commentStore: CommentStore
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
  profileStore: new profileStore(),
  commentStore: new CommentStore(),
}

export const StoreContext = createContext(store)
export function useStore() {
  return useContext(StoreContext)
}
