import * as Yup from 'yup';

import { DataValidation } from '../interface';

export default async (data: DataValidation): Promise<void> => {
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email obrigatório')
      .email('Digite um email válido'),
    password: Yup.string()
      .required('Senha obrigatória'),
  });

  await registerSchema.validate(data, {
    abortEarly: false,
  });
};
