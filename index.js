import VuexPersistence from 'vuex-persist'
import * as AppSettings from 'application-settings'

/**
 * Native storage implementation
 */
class NativeStorage {
  constructor(storage) {
    this.storage = storage
  }

  /**
   * Retrieve the keys list from storage
   * @returns {Array<String>} List of keys contained into the a storage
   * */
  get keys() {
    return this.storage.getAllKeys()
  }

  /**
   * Get the storage size
   * @returns {Number} How many keys are contained into the storage
   */
  get length() {
    return this.keys.length
  }

  /**
   *
   * @param {Number} index Array index
   * @returns {String} Keys at index
   */
  key(index) {
    return this.keys[index]
  }

  /**
   *
   * @param {*} key Key to associate to the data
   * @param {*} data Data to be saved into the storage
   */
  setItem(key, data) {
    this.storage.setString(key, data)
  }

  /**
   * Retrieve a value from the store saved associated to the key
   * @param {*} key Key used to select the value
   */
  getItem(key) {
    return this.storage.getString(key)
  }

  /**
   * Remove one key from the storage
   * @param {*} key Key to be removed
   */
  removeItem(key) {
    this.storage.remove(key)
  }

  /**
   * Remove all keys from the storage
   */
  clear() {
    this.storage.clear()
  }
}

/**
 * Return a VuexPeristence plugin initialized that saves data into the application settings
 * @param {Array<String>} modules List of modules to be saved into the storage
 * @param {String} key The key to use for storage. Allows versioning.
 * @returns {Plugin} VuexPeristence plugin function
 */
const NSVuexPersist = (modules, key = 'store') => {
  /** Prepare options */
  const storage = new NativeStorage(AppSettings)

  /** Initialize VuexPersistence with NativeStorage and return plugin */
  const persistence = new VuexPersistence({ key, modules, storage })
  return persistence.plugin
}

/** Export plugin */
export default NSVuexPersist
