import { configure } from 'enzyme';
import enableHooks from 'jest-react-hooks-shallow';
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

// pass an instance of jest to `enableHooks()`
enableHooks(jest);