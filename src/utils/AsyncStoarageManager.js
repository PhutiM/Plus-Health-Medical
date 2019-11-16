// @flow

import AsyncStorage from '@react-native-community/async-storage'

const APP_STORAGE_KEY = '@PMT'

export const getItemFromStorage = async (
  key: string,
  defaultValue: any
): any => {
  try {
    const value =
      (await AsyncStorage.getItem(`${APP_STORAGE_KEY}:${key}`)) || defaultValue

    return JSON.parse(value)
  } catch (error) {
    console.log(error)
  }

  return defaultValue
}

export const persistItemInStorage = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      `${APP_STORAGE_KEY}:${key}`,
      JSON.stringify(value)
    )
  } catch (err) {
    console.log(err)
  }
}

export const appendToPersistedItemInStorage = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    const storedData = await getItemFromStorage(key)
    if (!storedData) await persistItemInStorage(key, value)

    await AsyncStorage.mergeItem(
      `${APP_STORAGE_KEY}:${key}`,
      JSON.stringify(value)
    )

    // await AsyncStorage.setItem(
    //   `${APP_STORAGE_KEY}:${key}`,
    //   storedData.concat(value)
    // )
  } catch (err) {
    console.log(err)
  }
}

export const removeItemFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(`${APP_STORAGE_KEY}:${key}`)
  } catch (err) {
    console.log(err)
  }
}
