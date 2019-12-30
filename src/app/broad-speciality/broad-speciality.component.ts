import { Component, OnInit } from '@angular/core';
import { BroadSpeciality } from '../model/broad-speciality.model';
import { BroadSpecialityService } from '../shared/broad-specialities.service';


@Component({
  selector: 'app-broad-speciality',
  templateUrl: './broad-speciality.component.html',
  styleUrls: ['./broad-speciality.component.css']
})

export class BroadSpecialityComponent implements 
OnInit{

  broadData: BroadSpeciality[]
constructor(private broadServices:BroadSpecialityService ) { }

ngOnInit() {
this.getBroadSpecialitiesData();
}

getBroadSpecialitiesData(){
  this.broadServices.getBroadSpecialData().subscribe(data=>{
    this.broadData = data;
  })
}


}