import { PlanetaryService } from "@Services";
import { call } from "redux-saga/effects";
import Axios from 'axios';

export function* getApod(params:Object) {
  console.log('Hello Sagas!', params);
  const result = yield call(Axios.get, 'https://jsonplaceholder.typicode.com/todos/1');
  console.log(result.data);
}