export interface userInterface {
  name?: string;
  email: string;
  password: string;
}

export interface userWithoutPass {
  id: string;
  name: string;
  email: string;
}

export interface tokenInterface {
  iat: number;
  exp: number;
  sub: string;
}

export interface userAvatar {
  user_id: string;
  avatarFilename: string;
}
