import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "@bugsnag/expo";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
    //logger.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      //Command Query Separation (CQS principle)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  // const now = moment(Date.now());
  const now = dayjs();
  const storeTime = dayjs(item.timestamp);
  return now.diff(storeTime, "minute") > expiryInMinutes;
};

export default {
  store,
  get,
};
