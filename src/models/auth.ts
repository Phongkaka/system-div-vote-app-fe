export declare namespace Flowise {
  interface UserFormLoginData {
    email?: string
    password?: string
  }

  interface ISelectType {
    id: number
    name: string
  }

  interface ILogin {
    email?: string
    password?: string
  }

  interface IRegister {
    email?: string
    name?: string
    phone?: string
    password?: string
    confirmPassword?: string
  }

  interface IUser {
    data: {
      id: number
      name: string
      email: string
    }
    access_token: string
  }

  interface RefreshToken {
    refresh_token: string
  }

  interface RefreshTokenRes {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
  }
}
