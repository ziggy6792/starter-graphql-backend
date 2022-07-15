import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class SearchUserInput {
  @Field()
  name?: string;

  @Field((type) => Int, { nullable: true })
  age?: number;
}
