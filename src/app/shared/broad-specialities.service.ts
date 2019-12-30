import { Injectable } from '@angular/core';
import { BroadSpeciality } from '../model/broad-speciality.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class BroadSpecialityService{
  broadspecialities: BroadSpeciality[]=[{
    id:1,
    name:'Accident & Emergency'
  },
  {
    id:2,
    name:'Dentistry'
  },
  {
    id:3,
    name:'Anaesthesia'
  },
  {
    id:4,
    name:'Dermatology'
  },
  {
    id:5,
    name:'ENT'
  },
  {
    id:6,
    name:'General Medicine'
  }]

  getBroadSpecialData(): Observable<BroadSpeciality[]>{
    return of(this.broadspecialities)
  }
}