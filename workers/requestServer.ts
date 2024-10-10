import store from '../Redux/index'
import {
  getToken,
  removePersistedUser,
  removeToken,
  saveToken,
} from './localStorage';
import RNRestart from 'react-native-restart';
import { errorBox } from './utils';
import axios from 'axios';
import { saveJWTTokenAction } from '../Redux/actions/action';

const requestServer = function (
  method: string,
  url: string,
  payload?: any,
): any {
  // const controller = new AbortController();
  // const timeoutId = setTimeout(() => controller.abort(), 300000);
  return new Promise(async (resolve, reject) => {
    //for token
    let token = store.getState().user.jwt_token;

    if (!token) {
      const sinfoToken = await getToken();
      token = sinfoToken;
    }
    // let options: any = {
    //   signal: controller.signal,
    //   method: method,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     authorization: token,
    //   },
    // };
    // if (method === METHODS.POST || method === METHODS.GET) {
    //   options.body = JSON.stringify(payload);
    // }

    // Passing configuration object to axios
    await axios({
      method: method,
      url: url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        authorization: token,
      },
    })
      .then(async (serverResponse: any) => {
        //header to senf JWT token
        const header = serverResponse.headers.get('authorization');

        if (header) {
          console.log('Header---------', header);

          // replace a new token
          await saveToken(header);
          store.dispatch(saveJWTTokenAction(header));
        }
        // clearTimeout(timeoutId);
        if (serverResponse.status == 200) {
          logRequest(url, payload);
          if (serverResponse.headers.get('content-length') === '0') {
            resolve({status: serverResponse.status});
          } else {
            resolve({
              status: serverResponse.status,
              data: serverResponse?.data,
              statusCode: serverResponse.status
            });
          }
        } else {
          if (serverResponse.status === 401) {
            setTimeout(() => {
              errorBox('Session expired Please Login Again');
            }, 2000);
            await removeToken();
            await removePersistedUser();
            // await removeFCMToken();
            RNRestart.Restart();
          }

          console.log('>> Status: ', serverResponse.status);
          ErrorRequest(url, payload);
          // console.log('data-----', serverResponse?.data);
          reject({
            status: false,
            statusCode: serverResponse.status,
            data: serverResponse?.data,
          });
        }
      })
      .catch((err: any) => {
        console.log(err);
        ErrorRequest(url, payload);
        reject({status: false, data: err, statusCode: err?.response?.status});
      });
  });
};

export default requestServer;


const logRequest = (url: string, payload: any) => {
  console.log(`\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`);
};
const ErrorRequest = (url: string, payload: any) => {
  console.log(
    `\x1b[33m [*ERROR*] Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
  );
};
