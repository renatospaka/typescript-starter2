import Http from './http';
import Response from './response';
import PostTable from '../components/postTable';

interface Callable {
  (posts: Array<any>)
}

export default class PostHttp {
  private http: Http;

  constructor() {
    this.http = new Http()
  }

  query():Promise<Array<any>> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response: Response) {
        return JSON.parse(response.body);
      });
      // .catch(err => {
      //   console.log(err);
      // })
  }; 
}