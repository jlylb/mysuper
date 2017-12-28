import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any):Promise<any> {
      console.log(params,111)
      return this.api.get('sites/search?expand=commentInfo', params)
              .toPromise()
              .then((response:any) => {
                   return response.data;
               })
              .catch(this.handleError);
  }
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
