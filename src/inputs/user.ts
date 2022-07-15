import { Field, InputType } from 'type-graphql';

@InputType()
export class ISearchUserInput {
  @Field()
  name?: string;

  @Field()
  age?: number;
}
