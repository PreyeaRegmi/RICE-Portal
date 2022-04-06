import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  hostName = window.location.hostname;
  port = 3000;

  host = this.hostName +':' + this.port;

  constructor(private http: HttpClient) { }

  async getImages(): Promise<string[]> {

    let images = [];
    console.log(this.host);
    
    await this.http.get<string[]>('http://'+ this.host + "/retrieve_images").toPromise().then(data => images = data);

    return images;
  }


  async getImage(input: string): Promise<string> {
    let images = '';
    await this.http.get('http://'+ this.host + "/retrieve_image?image=" + input).toPromise().then(data => images = data.toString()).catch((err: HttpErrorResponse) => {
      images = err.error.text;
    });

    return images;
  }
}
