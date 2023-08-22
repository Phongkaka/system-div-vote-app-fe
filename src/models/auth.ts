export declare namespace Flowise {
  interface UserFormLoginData {
    email?: string
    password?: string
  }

  interface ISelectType {
    id: number
    name: string
  }

  interface IPost {
    id: number
    name: string
    payment_methods?: ISelectType
    stock_location?: ISelectType
    stock_picking_type?: ISelectType
  }

  interface ILogin {
    email?: string
    password?: string
  }

  interface IUser {
    data: {
      id: number
      name: string
      email: string
    }
    access_token: string
  }
}
