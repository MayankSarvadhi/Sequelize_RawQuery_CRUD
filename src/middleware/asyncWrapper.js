export const asyncWrapper = (passFunctions) => (req, res, next) => {
  Promise.resolve(passFunctions(req, res, next)).catch(next);
};



