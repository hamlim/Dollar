import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Header from '../components/header';

storiesOf('Test', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module)
  .add('with text', () => <Header />)
