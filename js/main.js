'use strict';

const BASE_URL = 'https://gateway.marvel.com';
const API_KEY = '?ts=1&apikey=1949a8b12f9bdd052cfd399ccf435154&hash=d8d88af175e494959a6e616f1eac29a6';
const API_URL = BASE_URL + '/v1/public/comics' + API_KEY;

import { getComics } from "./getComics.js";

let dataApi = getComics(API_URL);
