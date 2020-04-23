import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global.data';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {


  totalConfirmed =0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered =0; 
  data: GlobalDataSummary[];
  countries: string[]=[];
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
this.dataService.getDateWiseData().subscribe(result=>{
console.log("Date Wise Data",result);
})

    this.dataService.getGlobalData().subscribe(result=>{
this.data = result;
this.data.forEach(cs=>{
  this.countries.push( cs.country);  
  // console.log("countrues",this.countries);

})
    })
  }

  updateValues(country:string){
    console.log(country);
    this.data.forEach(cs=>{
       if(cs.country == country){
        this.totalActive = cs.active;
        this.totalConfirmed = cs.confirmed;
        this.totalDeaths = cs.deaths;
        this.totalRecovered = cs.recovered;
       }
    })

  }

}
