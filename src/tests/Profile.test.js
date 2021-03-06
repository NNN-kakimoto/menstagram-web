import { requestLogin, requestRegister } from '../api/auth';
import { getProfile } from '../api/profile';
import { getUserPosts } from '../api/profilePosts';

jest.setTimeout(10000);

const random = Math.random()
  .toString(36)
  .slice(-8);

const registerData = {
  payload: {
    user_id: random,
    screen_name: random,
    email: `${random}@gmail.com`,
    password: random
  }
};

const loginData = {
  payload: {
    user_id: random,
    password: random
  }
};

const typeNull = {
  accessToken: '',
  params: {}
};

const requestData = {
  accessToken: '',
  params: {
    user_id: 'menstagram'
  }
};

it('request profile api', () => {
  return requestRegister(registerData).then(registerRes => {
    typeNull.accessToken = registerRes.response.data.access_token;
    expect(registerRes.response.statusText).toEqual('OK');
    return getProfile(typeNull).then(profileRes => {
      expect(profileRes.response.status).toEqual(200);
    });
  });
});

it('request userPosts api', () => {
  return requestLogin(loginData).then(loginRes => {
    requestData.accessToken = loginRes.response.data.access_token;
    expect(loginRes.response.statusText).toEqual('OK');
    return getUserPosts(requestData).then(userPostsRes => {
      expect(userPostsRes.response.status).toEqual(200);
    });
  });
});
