import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProperty } from '../property-list/property.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {


  
  @Input() property?: IProperty;

  showButtons: boolean = false;


/*
property : any = {
  propertytype : "propertytype1",
  address : "address1",
  FurnishType : "Furnish Type1",
  Price:"Price1",
  Area:"Area1"
 }
*/

}
