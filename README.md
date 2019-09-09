# ns-vuex-persist
A Vuex plugin that enables you to save the state of your NativeScript app to the SharedPreferences on Android and NSUserDefaults on iOS via the Application Settings module

## Installation
`npm install --save ns-vuex-persist`

## Usage
One of the use cases for this package is to store the user session on native device storage. Import the module from "ns-vuex-persist" and pass an instance of it to vuex as a store plugin. The module takes an optional array param in order to filter the modules that need to be persisted.

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import NSVuexPersist from 'ns-vuex-persist'

/** Store modules */
import session from './modules/session/'
import todo from './modules/todo/'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { session },
  plugins: [NSVuexPersist(['session'])]
})

export default store
```

### Details and mentions
ns-vuex-persist contains an implentation of the "Storage" interface provided by [@championswimmer](https://github.com/championswimmer) in [vuex-persist](https://github.com/championswimmer/vuex-persist "vuex-persist") . This class is called NativeStorage and wraps the NativeScript [Application Settings](https://docs.nativescript.org/ns-framework-modules/application-settings) module in order to save the state into SharedPreferences (android) or NSUserDefaults (iOS) instead of LocaleStorage (default target in vuex-persist for web project).


## Todo
- [ ] "Transpile" the module in TypeScript
- [ ] Refactor code and folder structure
- [ ] Make it a NativeScript plugin
- [ ] Add tests
