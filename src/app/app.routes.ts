import { Routes } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'', component: PropertyListComponent },
    {path:'property-details/:id', component: PropertyDetailsComponent},
    {path:'add-property', component: AddPropertyComponent},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'**', component: PropertyListComponent}
];
