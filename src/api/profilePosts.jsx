import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const getProfilePosts = request => {
  return axios({
    method: 'GET',
    url: `${baseUrl}/v1/user/posts`,
    headers: {
      Authorization: `Bearer ${request.accessToken}`
    },
    params: request.params
  })
    .then(postsResponse => ({ postsResponse }))
    .catch(postsError => ({ postsError }));
};
