import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoggerInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let ans:string;
        if(req.url==='../assets/data/users.json'){
            ans='users'
        }else{
            ans='products';
        }
        console.log(`load ${ans}`);
        return next.handle(req);
    }
}