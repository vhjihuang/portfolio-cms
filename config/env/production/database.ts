// Production database configuration for Railway deployment
// This configuration uses environment variables provided by Railway

export default ({ env }: { env: any }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('PGHOST', env('DATABASE_HOST', 'localhost')),
      port: env.int('PGPORT', env.int('DATABASE_PORT', 5432)),
      database: env('PGDATABASE', env('DATABASE_NAME', 'railway')),
      user: env('PGUSER', env('DATABASE_USERNAME', 'railway')),
      password: env('PGPASSWORD', env('DATABASE_PASSWORD', '')),
      ssl: {
        rejectUnauthorized: false
      }
    },
    debug: false,
  },
});