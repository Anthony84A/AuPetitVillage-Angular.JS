import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AboutComponent } from "./about/about.component";
import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByName } from './filter-by-name.pipe';
import { ContactComponent } from './contact/contact.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  HeaderComponent, 
  FooterComponent, 
  AccueilComponent, 
  AboutComponent, 
  SortByPricePipe, 
  FormsModule, 
  FilterByName, 
  ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AuPetitVillage';
}
