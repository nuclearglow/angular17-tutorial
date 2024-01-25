import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { environment } from '../../environments/environment';
import { Housing } from '../housing/types';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  backendUrl = `${environment.BACKEND_HOST}/locations`;

  constructor() {
    if (isEmpty(environment.BACKEND_HOST)) {
      throw new Error('BACKEND_HOST is not set in environment.');
    }
  }

  async getHouses(): Promise<Housing[]> {
    const data = await fetch(this.backendUrl);
    return (await data.json()) ?? [];
  }

  async getHousesById(id: number): Promise<Housing | undefined> {
    const data = await fetch(`${this.backendUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `House request received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
