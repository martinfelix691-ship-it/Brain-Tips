export default async function handler(request, response) {
  try {
    const today = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Africa/Lagos"
    }).format(new Date());

    const apiResponse = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${today}`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await apiResponse.json();

    response.status(apiResponse.status).json(data);

  } catch (error) {
    response.status(500).json({
      error: "Failed to connect to Football API",
      details: error.message
    });
  }
}
