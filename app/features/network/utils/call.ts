import type { Response } from '../types';

/**
 * Makes a request to the API.
 *
 * @param url The URL to make the request to.
 * @param init The request options.
 *
 * @returns The JSON response.
 * @throws If the response is not successful.
 */
export const call = async <T>(url: string, init?: RequestInit) => {
  // Make the request to the API.
  const response = await fetch(`https://admin-api.trysmartbite.com/api${url}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });

  // Get the JSON response.
  const json: Response<T> = await response.json();

  // If the response is not successful, throw an error.
  if (!json.success) {
    throw json;
  }

  // Otherwise, return the JSON response.
  return json;
};
