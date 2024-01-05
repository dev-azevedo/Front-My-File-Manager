export type IUser = {
  id: number;
  name: string;
  email: string;
  profile: string;
};

export type IAppDataContext = {
  user: IUser | null;
  token: string;
  validateToken: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};
