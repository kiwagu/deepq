import { User } from '@zen/nest-api/prisma';

export interface AuthSession {
  userId: User['id'];
  token: string;
  roles: string[];
  rememberMe: boolean;
  expiresIn: number;
  rules: object[];
}
