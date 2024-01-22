import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Housing } from './types';

@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.scss',
})
export class HousingComponent {
  @Input() house: Housing | undefined;
}
