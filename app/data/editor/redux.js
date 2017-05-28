import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  editorUpdateContent: ['content'],
});

export const ProfileTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  content: '',
});

export const updateContent = (state, { content }) =>
  state.merge({
    content,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EDITOR_UPDATE_CONTENT]: updateContent,
});
