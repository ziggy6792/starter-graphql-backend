import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class SearchUserInput {
  @Field()
  lastName: string;

  @Field({ nullable: true })
  firstName: string;

  @Field((type) => Int, { nullable: true })
  age?: number;
}
