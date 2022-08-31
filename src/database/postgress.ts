import { Pool } from 'pg';

const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'starfighters',
  password: 'postgrespw',
  port: 5432
})


export default connection;