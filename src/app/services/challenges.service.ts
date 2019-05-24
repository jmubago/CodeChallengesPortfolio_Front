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
      description: 'A cash machine to calculate the change that has to be returned to the customer',
      url: 'url 1'
    },
    {
      title: 'Non Repeating Character',
      subtitle: 'Coding challenge 2',
      description: 'Find out the first non repeated character in a text',
      url: 'url 2'
    },
    {
      title: 'Roman Numbers',
      subtitle: 'Coding challenge 3',
      description: 'Program that converts a natural number to a Roman number',
      url: 'url 3'
    },
    {
      title: 'Scale Balancing',
      subtitle: 'Coding challenge 4',
      description: 'Determine if it´s possible to balance a scale using the least amount of weights, using a maximun amount of 2',
      url: 'url 4'
    },
    {
      title: 'Sample sample',
      subtitle: 'Coding challenge 5',
      description: 'sample',
      url: 'url 5'
    }
  ];
  return challenge;
}

  public nonRepeatingCharacterChallenge(text: string){
      let url = this.getQuery('nonrepeatingcharacter');
      let body = {
        string: text
      };
      let headers = this.getHeaders();
      return this.http.post(url, body, headers);
  }

  // ## Private Methods
  private getQuery(query: string){
    const url = `https://localhost:4000/${query}`;
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