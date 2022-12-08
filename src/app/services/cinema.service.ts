import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  url: string = "https://www.finnkino.fi/xml/News/";

  testData = [
    { 'Title': 'Ensi-ilta: Palm Springs', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
    { 'Title': 'Ensi-ilta: Karjamäen joulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }
  ];

  getTestData(): Observable<any> {

    return of(this.testData);
  }
  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' }).pipe(map(response => {
      let newsData: any;
      parseString(response, {
        trim: true,
        explicitArray: false,
        mergeAttrs: true
      }, function (err: any, result: any) {
        console.log('getJsonData... ' + JSON.stringify(result.News.NewsArticle));
        newsData = result.News.NewsArticle;
      });


      return newsData;

    }));



  }

  constructor(private httpClient: HttpClient) {

  }
}
