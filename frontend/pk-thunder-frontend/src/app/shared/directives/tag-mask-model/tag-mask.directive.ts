import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener, Input,
  Output,
  Renderer2
} from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { TagPipe } from '../../pipes/tag.pipe';

@Directive({
  selector: 'input[tagMask]',
})
export class TagMaskDirective {
  
  @Output() public onMask = new EventEmitter<any>();
  @Input() public tagType: number;
  
  public NewEventSubject = new Subject<KeyboardEvent>();
  public NewEvent: Observable<KeyboardEvent>;

  constructor(
    public model: NgModel,
    public el: ElementRef,
    public renderer: Renderer2,
    private tagPipe: TagPipe
  ) {
    this.NewEvent = this.NewEventSubject.pipe(debounce(() => interval(100)));
    this.NewEvent.subscribe(() => {
      this.onMask.emit(this.tagPipe.transform(this.model.model, this.tagType));
    });
  }

  ngOnInit() {
    this.onMask.emit(this.tagPipe.transform(this.model.model, this.tagType));
  }

  @HostListener('keyup', ['$event'])
  public onKeyUp(event: KeyboardEvent): void {
    event.preventDefault();
    this.NewEventSubject.next(event);
  }
}
