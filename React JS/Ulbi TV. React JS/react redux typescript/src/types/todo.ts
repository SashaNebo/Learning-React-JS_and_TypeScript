export interface TodoState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoACtionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
  type: TodoACtionTypes.FETCH_TODO
}

interface FetchTodoSuccessAction {
  type: TodoACtionTypes.FETCH_TODO_SUCCESS
  payload: any[]
}

interface FetchTodoErrorAction {
  type: TodoACtionTypes.FETCH_TODO_ERROR
  payload: string
}

interface FetchTodoPageAction {
  type: TodoACtionTypes.SET_TODO_PAGE
  payload: number
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | FetchTodoPageAction