export const moviesUrl = import.meta.env.VITE_API || '';
export const searchUrl = import.meta.env.VITE_SEARCH || '';
export const imageUrl = import.meta.env.VITE_IMG || '';
export const apiKey = import.meta.env.VITE_API_KEY || '';

export const formatCurrency = (number) => {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
