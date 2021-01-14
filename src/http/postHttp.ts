import Http from './http';
import Response from './response';
import PostTabe from '../components/postTable';

interface Callable {
  (posts: Array<any>)
}

export default class PostHttp {
  private http: Http;
  constructor() {
    this.http = new Http()
  }

  query() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response:Response) {
        // console.log(JSON.parse(response.body));
        new PostTabe('#my-table>tbody', JSON.parse(response.body), ['title', 'body']).make();
      })
      .catch(err => {
        console.log(err);
      })
  };

  // post(callable, callableError) {
  //   let xhttp = new XMLHttpRequest();
  //   xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       callable(this.responseText);
  //     } 

  //     callableError(this.responseText);
  //   }
  // };
}