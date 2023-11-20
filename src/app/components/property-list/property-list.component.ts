import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PropertyService } from '../../services/property.service';
import { IProperty } from './property.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './property-list.component.html',
    styleUrl: './property-list.component.css',
    imports: [CommonModule, PropertyCardComponent]
})
export class PropertyListComponent implements OnInit{


  property? : IProperty[];

  constructor(private propertyService: PropertyService, private route:ActivatedRoute) {}

  ngOnInit(): void {
     this.propertyService.propertiesData().subscribe({
      next : (response:IProperty[]) =>{
        console.log(response);
        this.property = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
     })
  }

}




