import { BASE_URL, METHODS } from "../../constants/API_constants";
import requestServer from "../../workers/requestServer";

export const getAxiosTest = async (params: any) => {
    try {
      const response = await requestServer(
        METHODS.GET,
        'https://cat-fact.herokuapp.com/facts/',
      );
      return response.status === 200
        ? {status: true, statusCode: response.status, res: response.data}
        : failedLog('getAxiosTest()', response);
    } catch (err) {
      console.log('errr--', err);
      return {
        status: false,
        statusCode: err?.statusCode,
        res: err.data,
      };
    }
  };
  const failedLog = (functionname: string, response: any) => {
    console.log(
      `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
    );
    throw response;
  }