export interface UserData {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  profilePic: string;
  status:string;
}

export interface LoginResponse {
  user:UserData;
  token: string;
  refreshToken:string;
  message:string;
}
export interface SignupResponse {
  success:string;
  message:string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  fullName :string;
  phoneNumber : string;
  email: string;
  password: string;
}
export interface userUpdateResponse {
  user:UserData;
  success:string;
  message:string;
}
export interface userUpdatePayload {
  fullName :string;
  phoneNumber : string;
  status : string
}
