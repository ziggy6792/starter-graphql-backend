import { prop as Property } from '@typegoose/typegoose';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  @Property({ required: true })
  name: string;

  @Field()
  @Property()
  age: number;
}
