import { User } from './user'

export interface Photo {
  id: string
  url: string
  isMain: boolean
}

export interface Profile {
  username: string
  displayName: string
  image?: string
  bio?: string
  photos?: Photo[]
}

export class Profile implements Profile {
  constructor(user: User) {
    this.username = user.username
    this.displayName = user.displayName
    this.image = user.image
  }
}
