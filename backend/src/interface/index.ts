export interface userInterface {
  name?: string;
  email: string;
  password: string;
}

export interface tokenInterface {
  iat: number;
  exp: number;
  sub: string;
}
