import { Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Service } from 'src/app/app.restservice';
import { Data } from 'src/app/pages/apple-stock/apple-stock.model';
import Chart from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-for-microsoft',
  templateUrl: './modal-for-microsoft.component.html',
  styleUrls: ['./modal-for-microsoft.component.scss']
})



export class ModalForMicrosoftComponent implements OnInit {
  @Input () id: number;
  myForm: FormGroup;
  public data: any;
  data$ : Data[];
  public usable: any;
  public latest: any;
  public hours;
  public minutes;
  public checkStock;
  public finalStockValue;
  isDataAvailable:boolean = false;
  
  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private service: Service,
    private formBuilder: FormBuilder
   ) {
     this.createForm();
   }

   ngOnInit(): void {
    let resp = this.http.get<Data[]>("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=60JY37XTRGIVVERU");
    resp.subscribe((data)=> {
      this.data$=data;
      this.usable = this.data$['Time Series (5min)'];
      this.latest =this.usable[Object.keys(this.usable)[0]]; //getting the last element
   });
  }
   private createForm() {
    this.myForm = this.formBuilder.group({
      hours: '',
      minutes: ''
    });
  }
  private submitForm() {
    console.log(this.myForm.value['hours']);
    this.hours = this.myForm.value['hours'];
    this.minutes = this.myForm.value['minutes'];
    console.log(this.myForm.value['hours']+","+this.myForm.value['minutes']);
    this.checkStock = Object.keys(this.usable)[0].slice( 0, 10)+" "+this.hours+":"+this.minutes+":"+"00";
    console.log(Object.keys(this.usable)[0].slice( 0, 10)); //slicing date from this.usable
    console.log(this.checkStock);
    this.finalStockValue = this.usable[this.checkStock];
    console.log(this.finalStockValue);
    this.isDataAvailable = true
    //this.activeModal.close(this.myForm.value);
  }



  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
