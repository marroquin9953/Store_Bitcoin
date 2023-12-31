import { fetchUserByHandle } from 'api/strikeApi';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query;
    try {
      const data = await fetchUserByHandle(username);
      if (data?.data?.canReceive) {
        res.status(200).json({});
      } else {
        res.status(400).json({ error: `El usuario no puede recibir pagos` });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: 'Usuario no encontrado' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
