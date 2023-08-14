export interface Contact {
  id: string
  name: ContactName
  username: string
  email: string
  location: Location
  phone: string
}

export interface ContactName {
  firstName: string
  lastName: string
}

interface Location {
  country: string
  street: string
  city: string
  state: string
  postcode: number
}
