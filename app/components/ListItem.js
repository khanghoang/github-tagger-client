import React from 'react';
import GLink from './GLink';

const Tag = ({ tag: { _id: id, name } }) => (
  <div key={id} className="btn btn-sm h-space-s">
    {name}
  </div>
);

const ListItem = ({ repo: { tags: repoTags, name, _id: id } }) => {
  const tags = repoTags.map(t => <Tag tag={t} />);
  const [username, repoName] = name.split('/');
  const userLink = (
    <GLink url={`https://github.com/${username}`}>{username}</GLink>
  );
  const repoLink = (
    <GLink url={`https://github.com/${username}/${repoName}`}>{repoName}</GLink>
  );
  return (
    <li key={id} className="v-space-m">
      {userLink} / {repoLink}
      <div className="v-space-s">
        {tags}
      </div>
    </li>
  );
};

export default ListItem;
