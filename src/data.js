export const APPLICATION_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `JWT ${localStorage.getItem('access')}`,
    Accept: 'application/json',
  },
}