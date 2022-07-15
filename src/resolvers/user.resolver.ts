/* eslint-disable no-useless-constructor */

import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from 'src/entities/user.entity';
import { SearchUserInput } from 'src/inputs/user';
import _ from 'lodash';

const users: User[] = [
  {
    firstName: 'Simon',
    lastName: 'Verhoeven',
    age: 30,
    dob: new Date(),
  },
  {
    firstName: 'Simon',
    lastName: 'Pegg',
    age: 52,
    dob: new Date(),
  },
  {
    firstName: 'Ben',
    lastName: 'Verhoeven',
    age: 31,
    dob: new Date(),
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
      if (input.lastName) {
        if (!user.lastName?.toLowerCase().includes(input.lastName.toLowerCase())) return false;
      }
      return true;
    });

    return searchResults;
  }
}
