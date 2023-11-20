import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit{

 

  constructor(private route : ActivatedRoute,private router:Router){
   
  }

  public propertyId!: number;


  ngOnInit() {

   this.propertyId = Number(this.route.snapshot.params['id']);

   this.route.params.subscribe(
    (params) => {
      this.propertyId =  +params['id'];
    }
   );

  }

  OnClickNext() {
   this.propertyId +=  1;
   this.router.navigate(['/property-details',this.propertyId]);
  }

}
