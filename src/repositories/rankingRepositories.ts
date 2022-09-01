import connection from '../database/postgress';

/* type Fighter = {
  id: number;
  username: string;
  wins: number;
  losses: number;
  draws: number;
}; */

export async function getRankingDB() {
  const result = await connection.query(`SELECT * FROM fighters ORDER BY wins DESC`);
  return result
}