import {Injectable} from '@angular/core';
import {DiagnosticService} from '../model/diagnostic-service.model';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class DiagnosticServicesService{
  diagnosticServices: DiagnosticService[]=[{
     id:1,
    name:'Radiology'
  },
  {
    id:2,
    name:'Interventional Radiology'
  },
  {
    id:3,
    name:'Laboratory'
  },
  {
    id:4,
    name:'Molecular Imaging'
  },
  {
    id:5,
    name:'Nuclear Medicine'
  }]
  constructor() { }

  getDiagnosticServicesData(): Observable<DiagnosticService[]>{
    return of(this.diagnosticServices)
 }
}