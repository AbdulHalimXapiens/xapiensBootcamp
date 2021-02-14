const { ApolloServer, gql } = require("apollo-server");
const LRU = require("lru-cache");
const { generate } = require("shortid");

// const { ApolloServer, gql } = require("apollo-server");
// const LRU = require("lru-cache");
// const { generate } = require("shortid");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `

type Query {
  tasks: [Task]
  task(id:String!): Task
}

type Task {
  id: String!
  nama: String!
  alamat: String!
  nohp: String!
  pekerjaan: String!
}

type Mutation {
  addData(nama: String!, alamat: String!, nohp: String!, pekerjaan: String!): Task
  updateData(id: String!, nama: String!, alamat: String!, nohp: String!, pekerjaan: String!): Task
}
 
`;

const cache = LRU({ max: 50, maxAge: 1000 * 60 * 60 });
const tasks1 = require("./person.json");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    tasks: () => {
      const task = tasks1;
      const tasks = [];
      cache.forEach((nama, alamat, nohp, pekerjaan, id) =>
        tasks.push({ nama, alamat, nohp, pekerjaan, id })
      );
      const gabung = [...task, ...tasks];
      return gabung;
    },
    task: (_, { id }) => {
      return {
        id,
        nama: createRandomId.get(id),
        alamat: createRandomId.get(id),
        nohp: createRandomId.get(id),
        pekerjaan: createRandomId.get(id),
      };
    },
  },
  Mutation: {
    addData: (_, { nama, alamat, nohp, pekerjaan }) => {
      const id = generate();
      const task = { nama, alamat, nohp, pekerjaan, id };
      cache.set(id, nama, alamat, nohp, pekerjaan);
      return task;
    },
    updateData: (_, { nama, alamat, nohp, pekerjaan, id }) => {
      const task = { nama, alamat, nohp, pekerjaan, id };
      cache.set(id, nama, alamat, nohp, pekerjaan);
      return task;
    },
    // createData: (_, { nama, alamat, nohp, pekerjaan }) => {
    //   const id = createRandomId();
    //   const newData = { id, nama, alamat, nohp, pekerjaan };
    //   db.tasks.push(newData);
    //   // Notify susbscriptions listening to the TODOS_CHANGED channel
    //   // That a to do has changed and sending through that the newToDo as
    //   // the ToDoChanged payload
    //   pubsub.publish(DATA_CHANGED, { DataChanged: newData });
    //   return newData;
    // },
  },
  // Subscription: {
  //   // Note: "Subscriptions resolvers are not a function,
  //   // but an object with subscribe method, that returns AsyncIterable."
  //   DataChanged: {
  //     subscribe(_, __, { pubsub }) {
  //       // Listen for TODOS_CHANGED changed and then forward the provided
  //       // ToDoChanged payload to clients who have subscribed to ToDoChanged
  //       return pubsub.asyncIterator(DATA_CHANGED);
  //     },
  //   },
  // },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
