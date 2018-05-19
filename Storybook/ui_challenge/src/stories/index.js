
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button'
import QiitaHeader from '../components/QiitaHeader'

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀) 😎😀 👍😎 💯👍</Button>)

// 今後追加したときの書き方例
// storiesOf('WantedlyJobPosting', module)
// .add('default', () => <WantedlyJobPosting />);

storiesOf('QiitaHeader', module)
.add('default', () => <QiitaHeader />);
