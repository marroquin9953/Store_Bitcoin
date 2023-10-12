import { fetchUserByHandle } from 'api/strikeApi';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query;
    try {
      const { data } = await fetchUserByHandle(username);
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: 'Usuario invalido' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
