import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileDTO, RecommendationDTO } from '../model/filemodel';
import { json } from 'express';



@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseURL="http://3.138.106.133:3000"

  dummyFileList: string = '[{"fileId":"","fileName":"Sample.mat","status":"not reviewed","diceOutput":".53","share":"Share with everybody","imageUrl":"https://raw.githubusercontent.com/PreyeaRegmi/RICE-Portal/dev/src/assets/img/60190-S70.jpg","matUrl":"","fileDetail":{"metaData":["Meta 1","Meta 2"],"scanParameter":["Param 1","Param 2"],"analyticsOutput":["Analytics 1","Analytics 2"],"shareStatus":["Status 1","Status 2"]}}]';
  dummyRecommendations:string='[{"actionId":"1","actionMessage":"Change Resolution of your image to","actionsOptions":[{"actionOptionId":"1","actionName":"720p","semCommand":{}},{"actionOptionId":"3","actionName":"1080p","semCommand":{}},{"actionOptionId":"4","actionName":"1920p","semCommand":{}},{"actionOptionId":"5","actionName":"3160p","semCommand":{}}]},{"actionId":"2","actionMessage":"Change size of image to","actionsOptions":[{"actionOptionId":"8","actionName":"1024 X 1024","semCommand":{}},{"actionOptionId":"9","actionName":"2048 X 2048","semCommand":{}}]},{"actionId":"3","actionMessage":"Move sample stage to","actionsOptions":[{"actionOptionId":"10","actionName":"X : 125","semCommand":{}},{"actionOptionId":"11","actionName":"Y : 250","semCommand":{}}]}]';
  host: string;
  constructor(private http: HttpClient) {

  }


  async getFiles(): Promise<FileDTO[]> {
    let filesJson;
    await this.http.get('http://' + this.host + "/retrieve_files").toPromise().then(data => filesJson = data.toString())
      .catch((err: HttpErrorResponse) => {
        console.log("Error while fetching file list")
        filesJson = this.dummyFileList;

      });

    // const fileList:FileDTO[] = parseArray(FileDTO, filesJson);
    const fileList:FileDTO[] = JSON.parse(filesJson);
    return fileList;
  }

  async getRecommendation(): Promise<RecommendationDTO[]> {
    let filesJson;
    await this.http.get('http://' + this.host + "/retrieve_files").toPromise().then(data => filesJson = data.toString())
      .catch((err: HttpErrorResponse) => {
        console.log("Error while fetching file list")
        filesJson = this.dummyRecommendations;

      });

    const fileList:RecommendationDTO[] = JSON.parse(filesJson);
    return fileList;
  }

}
