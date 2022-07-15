import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  name: string;

  @Field((type) => Int)
  age: number;
}
