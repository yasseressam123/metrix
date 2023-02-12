import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { PagesService } from 'src/app/pages/pages.service';
import {
  getSubordinates,
  getSubordinateSuccess,
} from '../actions/subordinate.action';

@Injectable()
export class SubordinateEffects {
  loadSubordinate$ = createEffect(() =>
    this.action$.pipe(
      ofType(getSubordinates),
      exhaustMap(() =>
        this.pagesService.getSubordinate().pipe(
          map((subordinates:any) => getSubordinateSuccess(subordinates.data)),
          // catchError(() => EmptyError)subordinates.data
        )
      )
    )
  );


  constructor(private action$: Actions, private pagesService: PagesService) {}
}
