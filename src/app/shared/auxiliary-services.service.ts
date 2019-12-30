import {Injectable } from '@angular/core';
import { AuxiliaryService } from '../model/auxiliary-service.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class AuxiliaryServicesService{
  auxiliaryservices: AuxiliaryService[]=[{
    id:1,
    name:'Blood Bank & Transfusion Services'
  },
  {
    id:2,
    name:'Clinical Research'
  },
  {
    id:3,
    name:'Food & Dietary Services'
  },
  {
    id:4,
    name:'Health Check Centre'
  },
  {
    id:5,
    name:'Medical Social Work'
  },
  {
    id:6,
    name:'Virtual Clinic'
  }]



getAuxiliaryServiceData() : Observable<AuxiliaryService[]>{return of (this.auxiliaryservices)
}
}