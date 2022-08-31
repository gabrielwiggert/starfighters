import { Pool } from 'pg';

const connection = new Pool({
  user: 'dbuser',
  host: 'dbhost',
  database: 'meudb',
  password: '',
  port: 55456
})


export default connection;