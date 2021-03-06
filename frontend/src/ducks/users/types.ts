import { UserDetails } from './../../ui/interfaces';
const GET_USER_SUCCESS: string = 'GET_USER_SUCCESS';
const GET_USER_REQUEST: string = 'GET_USER_REQUEST';
const GET_USER_FAILURE: string = 'GET_USER_FAILURE';

const DELETE_PRODUCT_SUCCESS: string = 'DELETE_PRODUCT_SUCCESS';

export const types = {
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
};

export interface UserDispatchType {
  type: typeof GET_USER_SUCCESS;
  payload: UserDetails[];
}
