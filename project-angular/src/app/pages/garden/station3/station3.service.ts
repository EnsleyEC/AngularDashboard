import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Station} from './station.model';

@Injectable()
export class Station3Service {

    selectedStation: Station;
    station: Station[];
    value: boolean;
    
    readonly baseURL = 'http://192.168.180.15:8000/stations/';

    constructor(private http: HttpClient) { }
    
    getStation(name: string): Observable<Station[]>
    {   
        return  this.http.get<Station[]>(this.baseURL+name);
        
    }
    
  
    getIrrigation(name: string): Observable<Station[]>
    {   
        console.log("aqui");
       // this.value = true;
          return this.http.get<Station[]>(this.baseURL+name)
        //return this.value;
    }

}

