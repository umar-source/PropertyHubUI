import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationbarComponent } from "./shared/navigationbar/navigationbar.component";
import { PropertyListComponent } from "./components/property-list/property-list.component";
import { PropertyCardComponent } from "./components/property-card/property-card.component";
import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './services/property.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[
      PropertyService
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        FormsModule,
        HttpClientModule,
        NavigationbarComponent,
        PropertyListComponent,
        PropertyCardComponent
    ]
})


export class AppComponent {

  title = '';

}
