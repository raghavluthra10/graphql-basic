import { createServer } from "@graphql-yoga/node";
import { helloArr } from "./fakeData";

const server = createServer({
   schema: {
      typeDefs: /* GraphQL */ `
         type Query {
            hello: String
            helloAgain: String
            helloObectResolver: HelloObject
            helloArrayResolver: [HelloObject]
         }

         type HelloObject {
            id: Int
            say: String
         }
      `,
      resolvers: {
         Query: {
            hello: () => "Hello from Yoga!",
            helloAgain: () => "hello again",
            helloObectResolver: () => {
               return {
                  id: 1,
                  say: "i am hello object from helloObjectResolver resolver",
               };
            },
            helloArrayResolver: () => helloArr.map((hello) => hello),
         },
      },
   },
});

server.start();
