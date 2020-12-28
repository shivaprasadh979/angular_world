import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObservable: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customObservable = Observable.create((observer) => {
      let countInterval = 0;
      setInterval(
        () => {
          if (countInterval > 4)
            observer.error(new Error('Youre reached ur world'));
          else if (countInterval > 3) observer.complete();
          observer.next(countInterval++);
        },
        2000,
        countInterval
      );
    });

    this.firstObservable = customObservable
      .pipe(
        filter((data) => {
          return data > 0 ? true : false;
        }),
        map((data: number) => {
          return 'Round:' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('next one will cause error');
        }
      );
  }
  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }
}
