import Response from './response';

enum httpVerbs {
  GET = 'GET',
  POST = 'POST'
};

export default class Http {
  get(url: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      let xhttp = this.createXhttp(httpVerbs.GET, url);
      this.configCallbacks(xhttp, resolve, reject);

      xhttp.send();
    })  
  }

  private createXhttp(verb: httpVerbs, url:string) {
    let xHttp = new XMLHttpRequest();
    xHttp.open(verb, url, true);
    return xHttp;
  }

  private configCallbacks(xHttp, resolve, reject) {
    xHttp.onreadystatechange = function() {
      if (this.readyState ==4) {
        const response = new Response(this.responseText, this.status);
        if (this.this.status == 200) {
          resolve(response);
        }
      }
      // if (this.readyState == 4 && this.status == 200) {
      //   resolve(this.responseText);
      // } 

      reject(this.responseText);
    };    
  }
}
