/* eslint-disable no-useless-constructor */

import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from 'src/entities/user.entity';
import { SearchUserInput } from 'src/inputs/user';
import _ from 'lodash';

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
  searchUsers(@Arg('input') input: SearchUserInput): User[] {
    const searchResults = _.filter(users, (user) => {
      if (input.age) {
        if (input.age !== user.age) return false;
      }
      if (input.name) {
        if (!user.name?.toLowerCase().includes(input.name.toLowerCase())) return false;
      }
      return true;
    });

    return searchResults;
  }
}
