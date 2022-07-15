/* eslint-disable no-useless-constructor */

import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from 'src/entities/user.entity';
import { ISearchUserInput } from 'src/inputs/user';

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
  listUsers(): User[] {
    return users;
  }

  @Query(() => [User])
  searchUsers(@Arg('input', { nullable: true }) input: ISearchUserInput): User[] {
    return users;
  }
}
