import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";


import { ViewBadgeModel, ViewBadgeCustomerModel, ViewBadgeBadgeModel, ViewBadgeIndividualModel, ViewBadgeVendorIndividualAssociation, ViewBadgeVevaImage } from './view-badge-model'



@Injectable()
export class ViewBadgeServiceService {

  constructor(
    private http: HttpClient
  ) { 

  }

  private getTokenForUUID(uuid: string){

  }

  getViewBadgeModelForUUID(uuid: string): Observable<ViewBadgeModel>{
    //60cb29fa-fc05-4331-a2cc-095d4ba66e24
    const urlPathPrefix: string = "https://raw.githubusercontent.com/darkdev-fadv/badge/master/data/ViewBadgeModel/view/"

    const url: string = `${urlPathPrefix}${uuid}.json`;
    const params = new HttpParams()
    .set('token', 'AN3FD4AZSXZIO2GH725NVRK57IXWA')
    
    console.info("getViewBadgeModelForUUID observable prepared for calling "+url);

    return this.http
            .get<ViewBadgeModel>(url,
            {params}
            );


    /*
      .subscribe(
        (val) => {
            console.log("call successful value returned in body", 
                        val);
        },
        response => {
            console.log("call in error", response);
        },
        () => {
            console.log("The call observable is now completed.");
        });
    */

  }

}