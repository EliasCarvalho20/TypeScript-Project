interface SignInCredentials{
  email: string;
  password: string;
}

export interface AuthContextInterface {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}
