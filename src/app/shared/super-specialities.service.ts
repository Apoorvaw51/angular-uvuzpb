import {Injectable } from '@angular/core';
import {SuperSpeciality} from '../model/super-speciality.model';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn:'root'
})


export class SuperSpecialityService {
  specialities:SuperSpeciality[]=[{
    id:1,
    name: '24×7 Emergency Trauma Services'
  },
  {
    id:2,
    name: 'Fetal Medicine'
  },
  {
    id:3,
    name: 'Cardiac Services and CCU '
  },
  {
    id:4,
    name: 'Gastroenterology'
  },
  {
    id:5,
    name: 'ICU'
  },
  {
    id:6,
    name: 'Critical Care'
  },
  ]

  getSuperSpecialData(): Observable<SuperSpeciality[]>{
    return of(this.specialities)
  }
}