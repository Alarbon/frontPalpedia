import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit, OnDestroy{
  @Output() onValue: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  private deBouncer: Subject<string> = new Subject();
  private suscribed?: Subscription;

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  ngOnInit(): void {
    this.suscribed = this.deBouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }
  onKeyPres(value: string) {
    this.deBouncer.next(value);
  }

  ngOnDestroy(): void {
    this.suscribed!.unsubscribe();
  }
}
