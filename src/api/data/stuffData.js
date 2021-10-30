import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getStuff = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createStuff = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/items.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/items/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getStuff().then(resolve);
        });
    })
    .catch(reject);
});

const deleteStuff = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/items/${firebaseKey}.json`)
    .then(() => getStuff().then(resolve))
    .catch(reject);
});

const updateStuff = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/items/${firebaseKey}.json`, updateObj)
    .then(() => getStuff().then(resolve))
    .catch(reject);
});

const getSingleStuff = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/items/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

export {
  getStuff, createStuff, deleteStuff, updateStuff, getSingleStuff,
};
