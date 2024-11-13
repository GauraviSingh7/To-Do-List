const { getConnectedClient } = require("../database");
// const app = express();
// app.use(express.json());

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdb").collection("todos");
  return collection;
};

module.exports = { getCollection };