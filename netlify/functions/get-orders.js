const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

exports.handler = async (event) => {
  // Get user ID from request (sent from frontend)
  const { userId } = JSON.parse(event.body);

  try {
    // Query orders that match the user ID
    const result = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("orders_by_user"), userId)),
        q.Lambda("order", q.Get(q.Var("order")))
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data.map((item) => item.data)),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
