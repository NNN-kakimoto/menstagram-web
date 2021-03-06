export const REGISTER = 'REGISTER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const FAIL_REGISTER = 'FAIL_REGISTER';

export const register = payload => {
  return {
    type: REGISTER,
    accessToken: null,
    payload: payload
  };
};

export const successRegister = payload => {
  return {
    type: SUCCESS_REGISTER,
    accessToken: payload.accessToken,
    userId: payload.userId
  };
};

export const failRegister = () => {
  return {
    type: FAIL_REGISTER,
    accessToken: null,
    userId: ''
  };
};
