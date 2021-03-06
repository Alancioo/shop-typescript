import { Cart } from './../../ui/interfaces';
const GET_CARTS_SUCCESS: string = 'GET_CARTS_SUCCESS';
const GET_CARTS_REQUEST: string = 'GET_CARTS_REQUEST';
const GET_CARTS_FAILURE: string = 'GET_CARTS_FAILURE';

const ADD_TO_CART_REQUEST: string = 'ADD_TO_CART_REQUEST';
const ADD_TO_CART_SUCCESS: string = 'ADD_TO_CART_SUCCESS';
const ADD_TO_CART_FAILURE: string = 'ADD_TO_CART_FAILURE';

const DELETE_FROM_CART_REQUEST: string = 'DELETE_FROM_CART_REQUEST';
const DELETE_FROM_CART_SUCCESS: string = 'DELETE_FROM_CART_SUCCESS';
const DELETE_FROM_CART_FAILURE: string = 'DELETE_FROM_CART_FAILURE';

const DELETE_CART_REQUEST: string = 'DELETE_CART_REQUEST';
const DELETE_CART_SUCCESS: string = 'DELETE_CART_SUCCESS';
const DELETE_CART_FAILURE: string = 'DELETE_CART_FAILURE';

const BUY_CART_REQUEST: string = 'BUY_CART_REQUEST';
const BUY_CART_SUCCESS: string = 'BUY_CART_SUCCESS';
const BUY_CART_FAILURE: string = 'BUY_CART_FAILURE';

export const types = {
  GET_CARTS_REQUEST,
  GET_CARTS_FAILURE,
  GET_CARTS_SUCCESS,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  DELETE_FROM_CART_REQUEST,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_FAILURE,
  DELETE_CART_SUCCESS,
  BUY_CART_REQUEST,
  BUY_CART_SUCCESS,
  BUY_CART_FAILURE,
};

export interface GetCartsSuccess {
  type: typeof GET_CARTS_SUCCESS;
  payload: Array<Cart>;
}

export interface AddToCartSuccess {
  type: typeof ADD_TO_CART_SUCCESS;
  payload: string;
}
