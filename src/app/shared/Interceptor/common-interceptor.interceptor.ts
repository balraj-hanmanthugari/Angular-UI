import { HttpInterceptorFn } from '@angular/common/http';

export const commonInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const apiReq = req.clone({ url: `http://localhost:8080/ems/v1/${req.url}` });
  return next(apiReq);
};
