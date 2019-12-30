import { Component, OnInit} from '@angular/core';
import { AuxiliaryService} from '../model/auxiliary-service.model';
import {AuxiliaryServicesService} from '../shared/auxiliary-services.service';

@Component({
  selector: 'app-auxiliary-service',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.css']
})

export class AuxiliaryServiceComponent implements OnInit{
  auxiliaryData: AuxiliaryService[];
  constructor(private auxiliaryServices: AuxiliaryServicesService) { }

  ngOnInit (){
    this.getAuxiliaryServicesData();
  }

  getAuxiliaryServicesData(){
    this.auxiliaryServices.getAuxiliaryServiceData().subscribe(data=> {this.auxiliaryData = data;})
  }
}