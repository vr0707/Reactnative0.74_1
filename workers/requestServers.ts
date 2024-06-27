import axios from "axios"

const requestServers = (method, url, data) => {
    return new Promise(async (resolve, reject) => {
        await axios({
            method,
            url,
            data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }).then((serverResponse) => {
            console.log(serverResponse);
            if (serverResponse.status == 200) {
                resolve({
                    status: serverResponse.status,
                    data: serverResponse.data,
                    statuscode: serverResponse.status
                })
            }
        }).catch((err) => {
            reject({
                status: false,
                data: err.response?.data ? err.response?.data : err,
                statuscode: err?.response?.status,
            })
        })
    })
}
export default requestServers;