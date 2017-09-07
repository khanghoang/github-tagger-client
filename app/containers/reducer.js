import { makeFetchAction } from 'redux-api-call';

export const {
  dataSelector,
  isFetchingSelector,
  actionCreator,
} = makeFetchAction('FETCH_REPOS', () => {
  return {
    endpoint: 'https://github-tagger.herokuapp.com/getRepo?tag=',
    method: 'GET',
    headers: getState => {
      const token = getState().session;
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    },
  };
});
