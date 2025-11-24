export interface UserData {
  id: string;
  fullName: string;
  email: string;
  gender: string;
  profilePic: string;
}

export interface LoginResponse {
  data: UserData;
  token: string;
}
