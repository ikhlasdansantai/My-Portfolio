export const apiList = async (endpoint: string, query?: string) => {
  const response = await fetch(`${endpoint}?${query}`);
  return response.json();
};
