import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
//import { User } from '../providers';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token:string="";

    constructor(public storage:Storage) {
    //this.storage=storage;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.storage.get('token').then((data)=>{
        this.token=data;
      });
       const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer "+this.token)
        });
        return next.handle(clonedRequest);
    }
}
