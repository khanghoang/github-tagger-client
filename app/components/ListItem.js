import { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import React from 'react';
import Chips from '../tags';

import GLink from './GLink';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
});

const RepoListItem = ({ repo: { tags: repoTags, name, _id: id } }) => {
  const [username, repoName] = name.split('/');
  const userLink = (
    <GLink url={`https://github.com/${username}`}>
      {username}
    </GLink>
  );
  const repoLink = (
    <GLink url={`https://github.com/${username}/${repoName}`}>
      {repoName}
    </GLink>
  );

  return (
    <div>
      <ListItem button>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={repoName} secondary={username} />
      </ListItem>
      <Chips alignLeft tags={repoTags} />
    </div>
  );
};

export default withStyles(styles)(RepoListItem);
