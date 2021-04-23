interface SignInCredentials{
  email: string;
  password: string;
}

export interface AuthContextInterface {
  data: UserFromApi;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export interface UserFromApi {
  user: {
    id: string;
    name: string;
    email: string;
    token: string;
  }
}
