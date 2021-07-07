import { ValidationError } from 'yup';

import { YupError } from './interface';

export default (err: ValidationError): YupError => {
  const validationErrors: YupError = {};

  err.inner.forEach(({ path, message }) => {
    if (path) validationErrors[path] = message;
  });

  return validationErrors;
};
