import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  hostName = "www.google.com";
  port = 3000;

  host = this.hostName + ':' + this.port;

  constructor(private http: HttpClient) { }

  getImages(): Observable<string[]> {

    return this.http.get<string[]>('http://' + this.host + "/retrieve_images").pipe(
      tap(data => console.log(data)),
      catchError(err => {
        console.log("Error while fetching images: "+err);
        throw err;
      })
    );
  }


  async getImage(input: string): Promise<string> {
    let images = '';
    await this.http.get('http://' + this.host + "/retrieve_image?image=" + input).toPromise().then(data => images = data.toString()).catch((err: HttpErrorResponse) => {
      images = err.error.text;
    });

    return images;
  }
}
