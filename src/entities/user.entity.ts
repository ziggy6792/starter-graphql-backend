import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field((type) => Int)
  age: number;

  @Field()
  dob: Date;
}
