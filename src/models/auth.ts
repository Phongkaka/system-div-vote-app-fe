export interface UserFormLoginData {
  email?: string
  password?: string
}

export interface ISelectType {
  id: number
  name: string
}

export interface IPost {
  id: number
  name: string
  payment_methods?: ISelectType
  stock_location?: ISelectType
  stock_picking_type?: ISelectType
}

export interface ILogin {
  email?: string
  password?: string
}

export interface IUser {
  user: {
    id: number
    name: string
    username: string
  }
  access_token: string
}