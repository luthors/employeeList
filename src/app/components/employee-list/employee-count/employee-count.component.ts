import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  @Input() all:number;
  @Input() male:number;
  @Input() female:number;

  @Output() radioButtonChange= new EventEmitter<string>();
  radioButtonSelected='all'

  constructor() {
    this.all=0;
    this.female=0;
    this.male=0;
   }

  ngOnInit(): void {
    console.log(this.all);
  }

  radioButtonChangeEmitter():void{
    this.radioButtonChange.emit(this.radioButtonSelected)
  }
}
