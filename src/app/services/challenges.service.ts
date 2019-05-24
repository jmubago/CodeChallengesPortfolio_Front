import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private http: HttpClient) { }

//   public getNewReleases(): Observable<any> {

//     return this.getQuery('browse/new-releases?limit=20')
//       .pipe( map( data => {
//           return data['albums'].items;
//         }));
//   }

//   public getArtists(text: string): Observable<any> {

//     return this.getQuery(`search?q=${text}&type=artist&limit=15`)
//       .pipe( map( data => {
//         return data['artists'].items;
//       }));
//   }

//   public getArtist(artistId: string){
//     return this.getQuery(`artists/${artistId}`);
//   }

//   public getTopTracks(artistId: string){
//     return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
//       .pipe( map(data => {
//         return data['tracks']
//       }))
//   }

public getChallengeDisplay(){
  let challenge = [
    {
      title: 'Cash Machine',
      subtitle: 'Coding challenge 1',
      cardDescription: 'A cash machine to calculate the change that has to be returned to the customer',
      dialogDescription: 'hola caracolaaaaaaaaaaa',
      dialog: 'openCashMachineDialog'
    },
    {
      title: 'Non Repeating Character',
      subtitle: 'Coding challenge 2',
      cardDescription: 'Find out the first non repeated character in a text',
      dialog: 'openNonRepeatingCharacterDialog'
    },
    {
      title: 'Roman Numbers',
      subtitle: 'Coding challenge 3',
      cardDescription: 'Program that converts a natural number to a Roman number',
      dialog: 'openRomanNumbersDialog'
    },
    {
      title: 'Scale Balancing',
      subtitle: 'Coding challenge 4',
      cardDescription: 'Determine if it´s possible to balance a scale using the least amount of weights, using a maximun amount of 2',
      dialog: 'openScaleBalancingDialog'
    },
    {
      title: 'Sample sample',
      subtitle: 'Coding challenge 5',
      cardDescription: 'sample',
      dialog: 'openCashMachineDialog'
    }
  ];
  return challenge;
}

  public cashMachineChallenge(pp: number, ch: number){
      let url = this.getQuery('cashmachine');
      let body = {
        purchasePrice: pp,
        cash: ch
      };
      let headers = this.getHeaders();

      return this.http.post(url, body, headers);
  }

  // ## Private Methods
  private getQuery(query: string){
    const url = `http://localhost:4000/api/${query}`;
    return url;
  }

  private getHeaders(){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return httpOptions;
  }
}