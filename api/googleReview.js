export default async function handler(req, res) {
  const placeId = 'ChIJfU-7ODSTypQRYPOJ4jXb9hw';
  const apiKey = 'SUA_CHAVE_GOOGLE_API';

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,reviews&key=${apiKey}`
  );

  const data = await response.json();

  if (!data.result || !data.result.reviews) {
    return res.status(500).json({ error: 'Erro ao buscar avaliações.' });
  }

  res.status(200).json(data.result.reviews);
}