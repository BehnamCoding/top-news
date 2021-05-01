// imports

const handleFunc = (function () {

  // main class
  class Handle {

    constructor() {
      this.apiKey = '320b9a023bde4f6eabdf49a1c8e197be';
    }

   queryAPI(name, country, category) {
      // get api
      let url = `https://newsapi.org/v2/`;

      // build main url

      if (category == '' && country == '') {
        url += `everything?`;
      } else {
        url += `top-headlines?`;
      }

      // filter url with name
      if(name !== '') {
        url += `q=${name}&`;
      }

      // filter url with country
      if (country !== '') {
        url += `country=${country}&`;
      }

      // filter url with category
      if (category !== '') {
        url += `category=${category}&`;
      }

      // set apikey in url
      url += `apiKey=${this.apiKey}`;

      
      // fetch url
      const response = fetch(url);
      
      return response;

    }

  }

  // class instance
  const hndl = new Handle();

  // return methods
  return {
    queryAPI: function (name, country, category) {
      return hndl.queryAPI(name, country, category);
    }
  }

})()

// export function
export default handleFunc;