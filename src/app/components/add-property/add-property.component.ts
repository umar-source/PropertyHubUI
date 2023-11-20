import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {


  @ViewChild('Form')addPropertyForm!: NgForm;

constructor(private router:Router){}

onBack() {
this.router.navigate(['/']);
}

onSubmit() {
  console.log('Form submitted!');

  console.log(this.addPropertyForm);

}
}
