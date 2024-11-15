const { ApolloServer, gql } = require("apollo-server");
const { client } = require("./db");

// Definir el esquema GraphQL
const typeDefs = gql`
  type Alumno {
    id: Int
    nombre: String
    apellido: String
  }

  type Query {
    alumnos: [Alumno]
  }
`;

// Resolver para obtener los alumnos desde la base de datos
const resolvers = {
  Query: {
    alumnos: async () => {
      try {
        // Realizar la consulta a la base de datos
        const res = await client.query("SELECT * FROM alumnos");
        return res.rows;
      } catch (error) {
        console.error("Error al obtener los alumnos: ", error);
        throw new Error("No se pudieron obtener los alumnos");
      }
    },
  },
};

// Crear el servidor Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL corriendo en ${url}`);
});
