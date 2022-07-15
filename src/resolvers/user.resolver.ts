/* eslint-disable no-useless-constructor */

import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from 'src/entities/user.entity';

const users: User[] = [
  {
    name: 'Simon Verhoeven',
    age: 30,
  },
  {
    name: 'Simon Pegg',
    age: 52,
  },
  {
    name: 'Ben Verhoeven',
    age: 31,
  },
];

@Service()
@Resolver((of) => User)
export class UserResolver {
  @Query(() => [User])
  async listUsers(): Promise<User[]> {
    return users;
  }
}
