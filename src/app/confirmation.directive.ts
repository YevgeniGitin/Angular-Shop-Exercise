import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirmation]'
})
export class ConfirmationDirective {

  @Input() appConfirmation:string;
  @Output() confirmation= new EventEmitter<string>();

  constructor() { }

  @HostListener('click') 
  askConfirmation(event: MouseEvent) {
    if(confirm(this.appConfirmation)) {
     this.confirmation.emit("User confirmed");
    }else{
      this.confirmation.emit("User did not confirmed");
    }

  }
}
