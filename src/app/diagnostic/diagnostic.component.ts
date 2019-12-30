import {Component, OnInit} from '@angular/core';
import {DiagnosticService} from '../model/diagnostic-service.model';
import {DiagnosticServicesService} from '../shared/diagnostic-services.service';

@Component({
  selector:'app-diagnostic-service',
  templateUrl:'./diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})

export class DiagnosticServiceComponent implements OnInit{

  diagnosticData:DiagnosticService[];
  constructor(private diagnosticServices: DiagnosticServicesService){}

  ngOnInit(){
   this.getDiagnosticData();
  }

  getDiagnosticData(){
    this.diagnosticServices.getDiagnosticServicesData().subscribe(data=> {this.diagnosticData = data;})
  }
}