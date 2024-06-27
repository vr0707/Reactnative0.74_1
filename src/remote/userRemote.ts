import requestServers from "../../workers/requestServers";

export const getHomeData = async (params: any) => {
    try {
        const respone = await requestServers("GET", "https://graphicnewsplus.dci.in/api/customer/my_subscriptions", {})

        return respone;
    } catch (err) {
        return err;
    }
}