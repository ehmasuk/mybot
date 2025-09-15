'use server';

import { signIn } from '@/auth';

export const loginAction = async (data: Record<string, any>) => {
  await signIn('credentials', data);
};
