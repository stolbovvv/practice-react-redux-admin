import { useCallback } from 'react';

export function useFetch() {
  const fetchData = useCallback(async (url, { method = 'GET', body = null, headers = { 'Content-Type': 'application/json' } } = {}) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }, []);

  return fetchData;
}