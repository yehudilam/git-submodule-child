import 'react-native';
import {it, describe} from '@jest/globals';

import renderer from 'react-test-renderer';
import Page2 from './Page2';

describe('Page2', () => {
  it('renders correctly', () => {
    renderer.create(<Page2 />);
  });
});
