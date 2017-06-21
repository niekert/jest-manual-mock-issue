const __mock = Object.create(null);

const createActions = jest.fn((Actions) => {
  __mock.actions = new Actions();

  return __mock.actions;
});

const createStore = jest.fn();

export default {
  createActions,
  createStore,
  __mock
};
