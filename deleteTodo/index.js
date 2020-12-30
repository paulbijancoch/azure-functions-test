const cosmos = require('@azure/cosmos');
const endpoint = process.env.COSMOS_API_URL;
const key = process.env.COSMOS_API_KEY;
const { CosmosClient } = cosmos;

const client = new CosmosClient({ endpoint, key });
const container = client.database("dbtodos").container("items");

module.exports = async function (context, req) {
    const id = req.query.id || req.body.id;
    let res;
    try {
        res = await container.item(id).delete();
        context.res = {
            body: {'result': 'success'}
        };
    } catch(error) {
        context.res = {
            status: 400,
            body: {'result': 'error', error}
        };
    }
