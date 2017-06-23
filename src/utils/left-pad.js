// When running tests in jest, this import will resolve the left-pad.js file in the
// __mocks__ folder of this directory, instead of resolving left-pad from node_modules.
import leftPad from 'left-pad';

export default function (input, length, char) {
  console.log('leftPad is', typeof leftPad);
  return leftPad(input, length, char);
}
