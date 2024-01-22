import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingComponent } from '../housing/housing.component';
import { Housing } from '../housing/types';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  houses: Housing[] = [];
  housingService: HousingService = inject(HousingService);

  filteredHouses: Housing[] = [];

  constructor() {
    this.housingService.getHouses().then(houses => {
      this.houses = houses;
      this.filteredHouses = houses;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHouses = this.houses;
      return;
    }

    this.filteredHouses = this.filteredHouses.filter(house =>
      house?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
