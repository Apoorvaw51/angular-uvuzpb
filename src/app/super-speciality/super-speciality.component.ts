import { Component, OnInit } from '@angular/core';
import {SuperSpecialityService} from '../shared/super-specialities.service';
import { SuperSpeciality } from '../model/super-speciality.model';

@Component({
  selector: 'app-super-speciality',
  templateUrl: './super-speciality.component.html',
  styleUrls: ['./super-speciality.component.css']
})
export class SuperSpecialityComponent implements OnInit {
 specialData:SuperSpeciality[];
 constructor(private superSpecialServices:SuperSpecialityService){ }
 
ngOnInit(){
   this.getSuperSpecialitiesData();
}
 getSuperSpecialitiesData(){
  this.superSpecialServices.getSuperSpecialData().subscribe(data=>{
    this.specialData = data;
  })
 }
}