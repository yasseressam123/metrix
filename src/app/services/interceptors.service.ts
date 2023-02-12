import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token') || '{}';
   //&& request.url.indexOf('http://icityhost-001-site4.gtempurl.com/api/Carvan/Search') === -1
    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }else{
        console.log("errrrr")
    }

    // if (!request.headers.has('Content-Type')) {
    //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                //console.log('event--->>>', event);
            }
            return event;
        }));
}
}
