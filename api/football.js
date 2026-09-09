export default async function handler(request, response) {
  response.status(200).json({
    status: "Brain Tips backend ready",
    message: "Football API connection will be added next."
  });
}
