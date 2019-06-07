import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private http: HttpClient) { }

/**
 * Hardcoded array of objects with the different challenges
 */
public getChallengeDisplay(){
  let challenge = [
    {
      title: 'Cash Machine',
      subtitle: 'Coding challenge 1',
      cardDescription: 'A cash machine to calculate the change that has to be returned to the customer',
      dialog: 'openCashMachineDialog',
      github: 'https://github.com/jmubago/CodeChallengesPortfolio_Server/blob/master/server/challenges/CashMachineChallenge.js',
      dialogDescription:  "Design a cash register program, you will be given two decimal numbers, the first is the purchase price (PP) of the item, the second is the cash (CH) given by the customer. \n Your register currently has the following bills/coins  within it: 'PENNY': .01, 'NICKEL': .05, 'DIME': .10, 'QUARTER': .25, 'HALF DOLLAR': .50, 'ONE': 1.00, 'TWO': 2.00, 'FIVE': 5.00, 'TEN': 10.00, 'TWENTY': 20.00, 'FIFTY': 50.00, 'ONE HUNDRED': 100.00. The aim is to calculate the change that has to be returned to the customer."
    },
    {
      title: 'Non Repeating Character',
      subtitle: 'Coding challenge 2',
      cardDescription: 'Find out the first non repeated character in a text',
      dialog: 'openNonRepeatingCharacterDialog',
      github: 'https://github.com/jmubago/CodeChallengesPortfolio_Server/blob/master/server/challenges/NonRepeatingCharacterChallenge.js',
      dialogDescription: "A parameter will be passed which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if the parameter is 'agettkgaeee' then your program should return 'k'. The string will always contain at least one character and there will always be at least one non-repeating character."
    },
    {
      title: 'Roman Numbers',
      subtitle: 'Coding challenge 3',
      cardDescription: 'Program that converts a natural number to a Roman number',
      dialog: 'openRomanNumbersDialog',
      github: 'https://github.com/jmubago/CodeChallengesPortfolio_Server/blob/master/server/challenges/RomanNumbersChallenge.js',
      dialogDescription: "Many people are familiar with Roman numbers for relatively small numbers. The symbols I,V,X,L,C,D, and M represent the decimal values 1,5,10,50,100,500 and 1000 respectively. To represent other values, these symbols, and multiples where necessary, are concatenated, with the smaller-value value symbols written furthers to the right. For example number 3 is represented as III, and 73 as LXXIII. The exceptions to this rule occurs for numbers having unit values of 4 and 9, and for tens values of 40 and 90. For these cases, the Roman numeral representations are IV (4), IX(9), XL(40), and XC(90). So the Roman numeral representations for 24, 39, 44, 49, and 94 are XXIV, XXXIX, XLIV, XLIX, AND XCIV, respectively. Write a program to convert a cardinal number to a Roman numeral."
    },
    {
      title: 'Scale Balancing',
      subtitle: 'Coding challenge 4',
      cardDescription: 'Determine if it´s possible to balance a scale using the least amount of weights, using a maximun amount of 2',
      dialog: 'openScaleBalancingDialog',
      github: 'https://github.com/jmubago/CodeChallengesPortfolio_Server/blob/master/server/challenges/ScaleBalancingChallenge.js',
      dialogDescription: "Given two arrays with integers, the first being the weights on a balance scale (left, and right sides) and the secon array being a list of available weigts as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example array1 = [5,9] and array2 = [1,2,6,7] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, do for this example your program should return the string '2,6'. There will only ever be one unique solution and the list of avilable weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string 'not possible'"
    },
    {
      title: 'Kaprekars Number',
      subtitle: 'Coding challenge 5',
      cardDescription: 'How many iterations until reaching Kaprekan´s constant',
      dialog: 'openKaprekarsConstantDialog',
      github: 'https://github.com/jmubago/CodeChallengesPortfolio_Server/blob/master/server/challenges/KaprekarsConstantChallenge.js',
      dialogDescription: "Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174."
    }
  ];
  return challenge;
}

  /**
   * HTTP post request to get fetch data for cash machine challenge
   * @param pp Purchase price
   * @param ch Cash
   */
  public cashMachineChallenge(pp: number, ch: number): Observable<any>{
      let url = this.getQuery('cashmachine');
      let body = {
        purchasePrice: pp,
        cash: ch
      };
      let headers = this.getHeaders();

      return this.http.post(url, body, headers);
  }

  /**
   * HTTP post request to get fetch data for non repeating character challenge
   * @param text text
   */
  public nonRepeatingCharacter(text: string): Observable<any>{
    let url = this.getQuery('nonrepeatingcharacter');
      let body = {
        string: text
      };
      let headers = this.getHeaders();

      return this.http.post(url, body, headers);
  }

  /**
   * HTTP post request to get fetch data for roman numbers challenge
   * @param num number
   */
  public romanNumbersChallenge(num: string): Observable<any>{
    let url = this.getQuery('romannumbers');
      let body = {
        number: num
      };
      let headers = this.getHeaders();

      return this.http.post(url, body, headers);
  }

  /**
   * HTTP post request to get fetch data for scale balancing challenge
   * @param num number
   */
  public scaleBalancingChallenge(ws: any[], w: any[]): Observable<any>{
    let url = this.getQuery('scalebalancing');
      let body = {
        weightScale: ws,
        weights: w
      };
      let headers = this.getHeaders();

      return this.http.post(url, body, headers);
  }

  public kaprekarsConstantChallenge(num: number){
    let url = this.getQuery('kaprekarsconstant');
      let body = {
        number: num
      };
      let headers = this.getHeaders();
      return this.http.post(url, body, headers);
  }


  // ## Private Methods

  /**
   * Builds up the url for http request
   * @param query string with url
   */
  private getQuery(query: string){
    // const url = `http://localhost:4000/api/${query}`;
    const url = `https://codechallengejm.herokuapp.com/api/${query}`;
    return url;
  }

  /**
   * Get headers for http request
   */
  private getHeaders(){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return httpOptions;
  }
}