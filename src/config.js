const config = {
    appRoot: process.env.VUE_APP_APP_ROOT,
    apiRoot: process.env.VUE_APP_API_ROOT,
    // appRoot: parse(process.env.VUE_APP_APP_ROOT, 'https://app.merithq.com'),
    // apiRoot: parse(process.env.VUE_APP_API_ROOT, 'https://api.merithq.com'),
  }
  
//   function parse (value, fallback) {
//     if (typeof value === 'undefined') {
//       return fallback
//     }
//     switch (typeof fallback) {
//       case 'boolean' :
//         return !!JSON.parse(value)
//       case 'number' :
//         return JSON.parse(value)
//       default :
//         return value
//     }
//   }
  
  export default {
    install (Vue) {
      Vue.appConfig = config
      Vue.prototype.$appConfig = config
    }
  }