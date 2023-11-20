import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{
  
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.minLength(3)),
      confirmPassword : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.maxLength(10)),
    });

  }

  onSubmit() {
    console.log('gewf');
    }

}
