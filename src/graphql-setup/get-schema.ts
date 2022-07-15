import { buildSchemaSync, ResolverData } from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import { UserResolver } from 'src/resolvers/user.resolver';

import Context from './context';

let schema: GraphQLSchema;

export const getSchema = () => {
  schema =
    schema ||
    buildSchemaSync({
      resolvers: [UserResolver],
      // register our custom, scoped IOC container by passing a extracting from resolver data function
      container: ({ context }: ResolverData<Context>) => context.container,

      // use ObjectId scalar mapping,
      dateScalarMode: 'isoDate',
    });
  return schema;
};
