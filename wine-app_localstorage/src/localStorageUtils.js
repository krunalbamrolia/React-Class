
export const loadWines = () => {
  const wines = localStorage.getItem('wines');
  return wines ? JSON.parse(wines) : [];
};

export const saveWines = (wines) => {
  localStorage.setItem('wines', JSON.stringify(wines));
};

export const generateNewId = () => {
  const wines = loadWines();
  const maxId = wines.reduce((max, wine) => (wine.id > max ? wine.id : max), 0);
  return maxId + 1;
};
