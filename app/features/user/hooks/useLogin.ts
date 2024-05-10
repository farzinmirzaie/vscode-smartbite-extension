import { getConfigs } from '@features/common';
import { call } from '@features/network';
import type { LoginResponse } from '@features/network/types';
import { useQuery } from '@tanstack/react-query';

/**
 * Custom hook for logging the user in.
 *
 * @returns An object containing the login data, error, and loading state.
 */
export const useLogin = () => {
  return useQuery({
    queryKey: ['/login'],
    queryFn: () =>
      call<LoginResponse>('/canteen-login', {
        method: 'POST',
        body: JSON.stringify({
          loginWith: 'email',
          email: getConfigs().email,
          password: getConfigs().password,
          phoneNumber: '',
          remember: true,
        }),
      }),
    select: data => data.data,
    staleTime: 1000 * 60 * 5,
    meta: { persist: true },
  });
};
