import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  
  constructor(private alertController: AlertController, private http: HttpClient, private route: ActivatedRoute,private splash: SplashScreen){}
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  data: any;
  height_data:any;
  name:any;
  loadAllData:boolean;



  ngOnInit() {
    this.loadAllData=false;
    this.splash.show(); 
    this.getHeight(); 
   // this.getHeight();
    this.splash.hide();
  //  this.handleButtonClick();
    
    //this.drawGraph();
  }
  //drawGraph(){
 
   
   // console.log(this.data);
    

 // }
 /*
 async handleButtonClick() {
   console.log("Hello");
  const alert =  await this.alertController.create({
    
    header: 'Data has been submitted successfully',
    buttons: ['OK']
  });
   await alert.present();
}*/

  goBack() {
    window.history.back();
  }


  getReadingsForTable(){
    let id=this.route.snapshot.paramMap.get('id');
    
    
    this.http
    .get('http://liquidearthlake.org/json/getjsondatasixm/'+id)
      .subscribe((data : any) =>
      {
      
        this.data=data;
       console.log(data);
     
        
      },
      (error : any) =>
      {
        console.log(error);
      });
  }

  getHeight(){
    
    let id=this.route.snapshot.paramMap.get('id');
    //let variable = this.route.snapshot.paramMap.get('unit');
    //console.log('hi' + variable);
   
    console.log(id);
    
   
    this.http
    .get('http://liquidearthlake.org/json/getgauge/'+id)
      .subscribe((data : any) =>
      {
      
      this.height_data=data;
       console.log(this.height_data[0].unit);
      this.getReadings();
      this.getReadingsForTable();
        
      },
      (error : any) =>
      {
        console.log(error);
      });

  }
  
  
  getReadings(){
    
    console.log(this.height_data);
    
    var scale_size=15;
    var reading_date=[];
    var reading_height=[];
    let id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name');

    


    this.http
    .get('http://liquidearthlake.org/gauge/getjsondatasixm?gauge_inc_id='+id)
    .subscribe((data : any) =>
    {
        //this.data =data;
        console.log(this.data);
        
        for (var i=0;i<data.length;++i)
        {
            reading_date.push(this.formatedate(String(data[i].date)));
            reading_height.push(data[i].height);
            console.log(data[i].height);
    
        }
        var start_date= this.formatedate(String(data[0].date));
        var start_date1= moment(start_date);
        console.log(start_date1);
        
        var end_date = this.formatedate(String(data[data.length-1].date));
        var end_date1 = moment(end_date);
        console.log(end_date1);
        
        var modified_end_date;
        var diff_date_in_days=  end_date1.diff(start_date1, 'days');
        if(diff_date_in_days%scale_size==0){
            modified_end_date=end_date1;
        }
        else {
          var num_steps_x_axis = diff_date_in_days / scale_size;
          modified_end_date = start_date1.add((num_steps_x_axis + 1) * scale_size, 'days');
        }
        console.log(modified_end_date);
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: reading_date,
              datasets: [{
                  label: 'Lake Level',
                  data: reading_height,
                  lineTension: 0.25,
                  fill:false,
                  borderColor: 'rgba(65,105,225,1)',
                  backgroundColor: 'transparent',
                  pointBorderColor: 'rgba(65,105,225,1)',
                  pointBackgroundColor: 'rgba(65,105,225,1)',
                  borderWidth:2,
                  borderDash: [0, 0],
                  pointRadius: 2,
                  pointHoverRadius: 4,
                  pointHitRadius: 30,
                  pointBorderWidth: 2,
                  pointStyle: 'rectRounded'
            
              }]
          },
          options: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                  boxWidth: 80,
                  fontColor: 'black'
              }
            },
              scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'day',
                        unitStepSize:scale_size,
                        max:modified_end_date,
                        tooltipFormat: "MM/DD/YYYY",
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        //color: "black",
                      // borderDash: [2, 5],
                    },
                    scaleLabel: {
                        display: true,
                        labelString: (this.height_data[0].unit),
                        fontColor: "green"
                    }
                }]
            }
          }
    
        });
        
       
    },
    (error : any) =>
    {
       console.log(error);
    });
    
  }

  

  getReadingsThree(){
    var scale_size=10000;
    var reading_date=[];
    var reading_height=[];
    let id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name');
    this.http
    .get('https://liquidearthlake.org/gauge/getjsondatathreem?gauge_inc_id='+ id)
    .subscribe((data : any) =>
    {
        //this.data =data;
        console.log(this.data);
        
        for (var i=0;i<data.length;++i)
        {
            reading_date.push(this.formatedate(String(data[i].date)));
            console.log(data[i].height);
            reading_height.push(data[i].height);
    
        }
        var start_date= this.formatedate(String(data[0].date));
        var start_date1= moment(start_date);

        console.log(start_date1);


        var end_date = this.formatedate(String(data[data.length-1].date));
        console.log(end_date);

        var end_date1 = moment(end_date);
        var modified_end_date;
        var diff_date_in_days=  end_date1.diff(start_date1, 'days');
        console.log(diff_date_in_days);


        if(diff_date_in_days%scale_size!=0){
            modified_end_date=end_date1;
        }
        else {
          var num_steps_x_axis = diff_date_in_days / scale_size;
          modified_end_date = start_date1.add((num_steps_x_axis + 1) * scale_size, 'days');
        }
        console.log(modified_end_date);
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: reading_date,
              datasets: [{
                  label: 'Lake Level',
                  data: reading_height,
                  lineTension: 0.25,
                  fill:false,
                  borderColor: 'rgba(65,105,225,1)',
                  backgroundColor: 'transparent',
                  pointBorderColor: 'rgba(65,105,225,1)',
                  pointBackgroundColor: 'rgba(65,105,225,1)',
                  borderWidth:2,
                  borderDash: [0, 0],
                  pointRadius: 2,
                  pointHoverRadius: 4,
                  pointHitRadius: 30,
                  pointBorderWidth: 2,
                  pointStyle: 'rectRounded'
            
              }]
          },
          options: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                  boxWidth: 80,
                  fontColor: 'black'
              }
            },
              scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'day',
                        unitStepSize:scale_size,
                        max:modified_end_date,
                        tooltipFormat: "MM/DD/YYYY",
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        //color: "black",
                      // borderDash: [2, 5],
                    },

                   
                    scaleLabel: {
                        display: true,
                        labelString: (this.height_data[0].unit) ,
                        fontColor: "green"
                        
                    }
                }]
            }
          }
    
        });
        
       
    },
    (error : any) =>
    {
       console.log(error);
    });
    
  }

  
  getReadingsAll(){
    var scale_size=100;
    var reading_date=[];
    var reading_height=[];
    let id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name');
    this.http
    .get('https://liquidearthlake.org/gauge/getjsondataall?gauge_inc_id='+ id)
    .subscribe((data : any) =>
    {
        //this.data =data;
        console.log(this.data);
        
        for (var i=0;i<data.length;++i)
        {
            reading_date.push(this.formatedate(String(data[i].date)));
            reading_height.push(data[i].height);
    
        }
        var start_date= this.formatedate(String(data[0].date));
        var start_date1= moment(start_date);
        var end_date = this.formatedate(String(data[data.length-1].date));
        var end_date1 = moment(end_date);
        var modified_end_date;
        var diff_date_in_days=  end_date1.diff(start_date1, 'days');
        if(diff_date_in_days%scale_size==0){
            modified_end_date=end_date1;
        }
        else {
          var num_steps_x_axis = diff_date_in_days / scale_size;
          modified_end_date = start_date1.add((num_steps_x_axis + 1) * scale_size, 'days');
        }
        console.log(modified_end_date);
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: reading_date,
              datasets: [{
                  label: 'Lake Level',
                  data: reading_height,
                  lineTension: 0.25,
                  fill:false,
                  borderColor: 'rgba(65,105,225,1)',
                  backgroundColor: 'transparent',
                  pointBorderColor: 'rgba(65,105,225,1)',
                  pointBackgroundColor: 'rgba(65,105,225,1)',
                  borderWidth:2,
                  borderDash: [0, 0],
                  pointRadius: 2,
                  pointHoverRadius: 4,
                  pointHitRadius: 30,
                  pointBorderWidth: 2,
                  pointStyle: 'rectRounded'
            
              }]
          },
          options: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                  boxWidth: 80,
                  fontColor: 'black'
              }
            },
              scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'day',
                        unitStepSize:scale_size,
                        max:modified_end_date,
                        tooltipFormat: "MM/DD/YYYY",
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        //color: "black",
                      // borderDash: [2, 5],
                    },
                    scaleLabel: {
                        display: true,
                        labelString: (this.height_data[0].unit),
                        fontColor: "green"
                    }
                }]
            }
          }
    
        });
        
       
    },
    (error : any) =>
    {
       console.log(error);
    });
    
  }

  
  getReadingsOney(){
    var scale_size=50;
    var reading_date=[];
    var reading_height=[];
    let id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name');
    this.http
    .get('https://liquidearthlake.org/gauge/getjsondataoney?gauge_inc_id='+ id)
    .subscribe((data : any) =>
    {
        //this.data =data;
        console.log(this.data);
        
        for (var i=0;i<data.length;++i)
        {
            reading_date.push(this.formatedate(String(data[i].date)));
            reading_height.push(data[i].height);
    
        }
        var start_date= this.formatedate(String(data[0].date));
        var start_date1= moment(start_date);
        var end_date = this.formatedate(String(data[data.length-1].date));
        var end_date1 = moment(end_date);
        var modified_end_date;
        var diff_date_in_days=  end_date1.diff(start_date1, 'days');
        if(diff_date_in_days%scale_size==0){
            modified_end_date=end_date1;
        }
        else {
          var num_steps_x_axis = diff_date_in_days / scale_size;
          modified_end_date = start_date1.add((num_steps_x_axis + 1) * scale_size, 'days');
        }
        console.log(modified_end_date);
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: reading_date,
              datasets: [{
                  label: 'Lake Level',
                  data: reading_height,
                  lineTension: 0.25,
                  fill:false,
                  borderColor: 'rgba(65,105,225,1)',
                  backgroundColor: 'transparent',
                  pointBorderColor: 'rgba(65,105,225,1)',
                  pointBackgroundColor: 'rgba(65,105,225,1)',
                  borderWidth:2,
                  borderDash: [0, 0],
                  pointRadius: 2,
                  pointHoverRadius: 4,
                  pointHitRadius: 30,
                  pointBorderWidth: 2,
                  pointStyle: 'rectRounded'
            
              }]
          },
          options: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                  boxWidth: 80,
                  fontColor: 'black'
              }
            },
              scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'day',
                        unitStepSize:scale_size,
                        max:modified_end_date,
                        tooltipFormat: "MM/DD/YYYY",
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        //color: "black",
                      // borderDash: [2, 5],
                    },
                    scaleLabel: {
                        display: true,
                        labelString: (this.height_data[0].unit),
                        fontColor: "green"
                    }
                }]
            }
          }
    
        });
        
       
    },
    (error : any) =>
    {
       console.log(error);
    });
    
  }
  
  getReadingsOnem(){


  
    console.log('Hello');
    var scale_size=100;
    var reading_date=[];
    var reading_height=[];
    let id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name');
    this.http
    .get('https://liquidearthlake.org/gauge/getjsondataonem?gauge_inc_id='+ id)
    .subscribe((data : any) =>
    {
        //this.data =data;
        console.log(this.data);
        
        for (var i=0;i<data.length;++i)
        {
            reading_date.push(this.formatedate(String(data[i].date)));
            reading_height.push(data[i].height);
    
        }
        var start_date= this.formatedate(String(data[0].date));
        var start_date1= moment(start_date);
        var end_date = this.formatedate(String(data[data.length-1].date));
        var end_date1 = moment(end_date);
        var modified_end_date;
        var diff_date_in_days=  end_date1.diff(start_date1, 'days');

        console.log(diff_date_in_days);
        if(diff_date_in_days % scale_size==0){
            modified_end_date=end_date1;
            console.log(end_date1);
        }
        else {
          var num_steps_x_axis = diff_date_in_days / scale_size;
          modified_end_date = start_date1.add((num_steps_x_axis + 1) * scale_size, 'days');
        }
        console.log(modified_end_date);
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: reading_date,
              datasets: [{
                  label: 'Lake Level',
                  data: reading_height,
                  lineTension: 0.25,
                  fill:false,
                  borderColor: 'rgba(65,105,225,1)',
                  backgroundColor: 'transparent',
                  pointBorderColor: 'rgba(65,105,225,1)',
                  pointBackgroundColor: 'rgba(65,105,225,1)',
                  borderWidth:2,
                  borderDash: [0, 0],
                  pointRadius: 2,
                  pointHoverRadius: 4,
                  pointHitRadius: 30,
                  pointBorderWidth: 2,
                  pointStyle: 'rectRounded'
            
              }]
          },
          options: {
            legend: {
              display: false,
              position: 'top',
              labels: {
                  boxWidth: 80,
                  fontColor: 'black'
              }
            },
              scales: {
                xAxes: [{
                    type: "time",
                    time: {
                        unit: 'day',
                        unitStepSize:scale_size,
                        max:modified_end_date,
                        tooltipFormat: "MM/DD/YYYY",
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }],
                yAxes: [{
                    gridLines: {
                        //color: "black",
                      // borderDash: [2, 5],
                    },
                    scaleLabel: {
                        display: true,
                        labelString: (this.height_data[0].unit),
                        fontColor: "green"
                    }
                }]
            }
          }
    
        });
        
       
    },
    (error : any) =>
    {
       console.log(error);
    });
    
  }
  
  








  formatedate(date){
    return moment().format(date);
  }

  LoadAllReadings(){
      this.loadAllData=true;
  }

  

}