export const transformResponse = <T extends object>(data: T) => {
  return Object.entries(data).map(([id, item]) => ({ 
    id, 
    ...item 
  }));
};