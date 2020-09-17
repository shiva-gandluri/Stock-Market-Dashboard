import { Component, OnInit, DoCheck } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Data } from './apple-stock.model';
import { HttpHeaders } from '@angular/common/http';
import { Service } from 'src/app/app.restservice';
import Chart from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalForMicrosoftComponent } from 'src/app/pages/modal-for-microsoft/modal-for-microsoft.component';

@Component({
  selector: 'app-apple-stock',
  templateUrl: './apple-stock.component.html',
  styleUrls: ['./apple-stock.component.scss']
})
export class AppleStockComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public tsDatasets: any;
  public ctDatasets: any;
  public dsDatasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  data$ : Data[];
  isDataAvailable:boolean = false;
  isWeb:boolean = false;
  msftStockPrice;
  public usable: any;
  public latest: any;
  public hours;
  public minutes;
  public checkStock;
  

  constructor(private toastr: ToastrService, private http: HttpClient, private service: Service, private modalService: NgbModal) {
    this.service.getMicrosoftStockPrice().subscribe(data => {
      this.msftStockPrice = data;
      console.log(data);
      this.isWeb = true; 
    });
    
  }


  ngOnInit(): void {
    
    let resp = this.http.get<Data[]>("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=60JY37XTRGIVVERU")
    resp.subscribe((data)=> {
    this.data$=data;
    console.log(this.data$);
    console.log(this.data$['Time Series (5min)']);
    this.usable = this.data$['Time Series (5min)'];
    this.latest =this.usable[Object.keys(this.usable)[0]]; //getting the last element
    console.log(this.latest);
    console.log(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 4]]);
    console.log(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 3]]);
    this.loadCharts();
    console.log(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 4]]);
    console.log(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 3]]);
    this.isDataAvailable = true   
    });
    setTimeout(()=>{
    location.reload();
  },300000);
  
}

openFormModal() {
  
  //openVerticallyCentered(content) {
    const modalRef = this.modalService.open(ModalForMicrosoftComponent, { size: 'lg' }); //,  {backdropClass: 'black-backdrop', size: 'lg',  centered: true }
    //modalRef.componentInstance.id = 10; 
    modalRef.result.then((result) => {
      
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  //this.modalService.open(content);
  //}

}



loadCharts(){
  var gradientChartOptionsConfigurationWithTooltipRed: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
          beginAtZero: true,
          maxTicksLimit : 20,
          max: parseInt(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 4]]),
          min: parseInt(this.latest[Object.keys(this.latest)[Object.keys(this.latest).length - 3]])
          //suggestedMin: 219,
          //suggestedMax: 221
          
        }
      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: true,
          color: 'rgba(233,32,16,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }]
    }
  };
  this.canvas = document.getElementById("msftAPI");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    //for total shipments
    var data = {
      labels: ['Open', 'High', 'Low', 'Close'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0.2)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 10,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: Object.values(this.latest), 
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });
}

  }