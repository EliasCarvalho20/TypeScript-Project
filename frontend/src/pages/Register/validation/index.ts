import * as Yup from 'yup';

import { DataValidation } from '../interface';

export default async (data: DataValidation): Promise<void> => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome obrigatório')
      .min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: Yup.string()
      .required('Email obrigatório')
      .email('Digite um email válido'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  });

  await registerSchema.validate(data, {
    abortEarly: false,
  });
};
