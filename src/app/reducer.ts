import { Action, createSelector } from '@ngrx/store';
import { FormArrayState, createFormArrayState, formArrayReducer } from 'ngrx-forms';

export interface AppState {
  data: State;
}

export interface FormValue {
  ID: number;
  value: String;
}

export interface State {
  form: FormArrayState<FormValue>;
}

export const formInitialState = createFormArrayState<FormValue>( 'MY_FORM', [
    { ID: 1, value: 'hello'},
    { ID: 2, value: 'hi'},
    { ID: 3, value: 'test'},
  ]);

export const initialState: State = {
  form: formInitialState
}

export const reducer = (state: State = initialState, action: Action) => {

  const form = formArrayReducer(state.form, action);
  if (form !== state.form) {
    state = {...state, form};
  }

  return state;
}

export const getForm = (s: AppState) => s.data.form;


