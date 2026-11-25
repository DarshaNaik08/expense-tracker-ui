import { inject } from "@angular/core";
import { Auth } from "../services/auth";
import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor:HttpInterceptorFn = (req, next) =>{
    const authService = inject(Auth);
    const token = authService.getToken();
     
    if(token){
        req = req.clone({
            setHeaders:{
                Authorization: `Bearer ${token}`
            }
        })
    }

    return next(req);
}