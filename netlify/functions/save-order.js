const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

exports.handler = async (event) => {
  const { user, cart } = JSON.parse(event.body);

  const order = await client.query(
    q.Create(q.Collection("orders"), {
      data: { user, cart, date: new Date().toISOString() },
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(order),
  };
};
