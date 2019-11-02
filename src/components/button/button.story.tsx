import React, { FC } from 'react';
import { Button } from '.';

export default { title: 'Button' };

export const withText: FC = () => <Button>Hello Button</Button>;

export const withEmoji: FC = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
