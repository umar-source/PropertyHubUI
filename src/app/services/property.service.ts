import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IProperty } from '../components/property-list/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  
  readonly apiUrl = 'data/properties.json';

  propertiesData() :  Observable<any>{
      
    return   this.http.get("data/properties.json").pipe(
      catchError((error) => {       
        console.error('Data Fetching failed:', error);
        throw error;
      })
    );
  
  }

}
