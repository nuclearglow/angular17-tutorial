import { Injectable } from '@angular/core';
import { SERVER_URL } from '../constants';
import { Housing } from '../housing/types';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  async getHouses(): Promise<Housing[]> {
    const data = await fetch(SERVER_URL);
    return (await data.json()) ?? [];
  }

  async getHousesById(id: number): Promise<Housing | undefined> {
    const data = await fetch(`${SERVER_URL}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `House request received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
