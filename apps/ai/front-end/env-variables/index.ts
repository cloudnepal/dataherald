export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/v5';
export const EMBED_URL =
  process.env.NEXT_PUBLIC_EMBED_URL || 'http://localhost:4208/v4/viz/';
export const HOSTNAME =
  process.env.NEXT_PUBLIC_AUTH0_BASE_URL || 'http://localhost:3100';
export const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
export const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL;
export const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
export const AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE;
export const AUTH0_SCOPE = process.env.AUTH0_SCOPE;