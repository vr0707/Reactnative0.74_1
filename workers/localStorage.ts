import AsyncStorage from '@react-native-async-storage/async-storage';

interface persistedUser {
  user_id: string;
}

export const savePersistedUser = async (payload: persistedUser) => {
  try {
    const response = await AsyncStorage.setItem(
      '@user',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getPersistedUser = async (): persistedUser => {
  try {
    const response = await AsyncStorage.getItem('@user');
    return JSON.parse(response);
  } catch {
    return false;
  }
};
export const removePersistedUser = async () => {
  try {
    const response = await AsyncStorage.removeItem('@user');
    return true;
  } catch {
    return false;
  }
};


export const savePersistedLogin = async (payload: perisitedLogedin) => {
  try {
    const response = await AsyncStorage.setItem(
      '@login',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getPersistedLogin = async () => {
  try {
    const response = await AsyncStorage.getItem('@login');
    return JSON.parse(response);
  } catch {
    return false;
  }
};

export const removePersistedLogin = async () => {
  try {
    const response = await AsyncStorage.removeItem('@login');
    return true;
  } catch {
    return false;
  }
};



//For receive notificaion

// export const saveFCMToken = async (payload: any) => {
//   const response = await AsyncStorage.setItem('fcmtoken', payload);
//   return true;
// };

// export const getFCMToken = async () => {
//   const response = await AsyncStorage.getItem('fcmtoken');
//   return response;
// };

// export const removeFCMToken = async () => {
//   const response = await AsyncStorage.removeItem('fcmtoken');
//   return true;
// };

//To save Notification
export const saveToken = async (payload: any) => {
  try {
    const response = await AsyncStorage.setItem(
      '@token',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getToken = async (): any => {
  try {
    const response = await AsyncStorage.getItem('@token');
    return JSON.parse(response);
  } catch {
    return [];
  }
};

export const removeToken = async () => {
  try {
    const response = await AsyncStorage.removeItem('@token');
    return true;
  } catch {
    return false;
  }
};

export const saveNotify = async (payload: any) => {
  try {
    const response = await AsyncStorage.setItem("notify",
      payload
    );
    return true
  } catch {
    return false;
  }
}
export const getNotify = async (payload: any) => {
  try {
    const response = await AsyncStorage.getItem("notify");
    return JSON.parse(response);
  } catch {
    return false;
  }
}
export const removeNotify = async (payload: any) => {
  try {
    const response = await AsyncStorage.removeItem("notify");
    return true;
  } catch {
    return false;
  }
}
