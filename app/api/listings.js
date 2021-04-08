import client from "./client";

const endpoint = "/listings";

const getListings = (a, b, c) => client.get(endpoint);

export default { getListings };
