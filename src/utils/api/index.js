export const API_HOST = {
  // url: 'http://192.168.43.110/v1',
  url: 'http://test-sedulurtani.simtugas.id/v1',
};
export const queryString = payload => {
  const query = Object.keys(payload).map(key => {
    return `${key}=${encodeURIComponent(payload[key])}`;
  });
  return query.join('&');
};
