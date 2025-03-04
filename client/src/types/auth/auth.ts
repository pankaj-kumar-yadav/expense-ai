export type RoleType = "super-admin" | "admin" | "author" | "employee";

export interface UserData {
  userId: number;
  userName: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  contact?: string;
  role: RoleType;
  state: number;
  department?: string;
  level?: number;
  designation?: string;
}

export interface LoginCredentials {
  identity: string;
  password: string;
}

export interface RegisterCredentials {
  userName: string;
  password: string;
  email: string;
  fname: string;
  lname: string;
}

export interface RegisterResponse {
  bool: boolean;
  state: string;
}
export interface RegisterError {
  bool: boolean;
  msg: string;
}

export interface LoginResponse {
  bool: boolean;
  state: string;
  data: UserData;
}

export interface ApiError {
  bool: boolean;
  error: string;
}

export interface ApiResponse<T> {
  data: T;
  bool: number;
  stat: string;
}
