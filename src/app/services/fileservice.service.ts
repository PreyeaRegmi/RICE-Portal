import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FileDTO, RecommendationDTO } from '../model/filemodel';
import { json } from 'express';



@Injectable({
  providedIn: 'root'
})
export class FileService {

  dummyFileList: string = '[{"fileId":"","fileName":"Sample.mat","status":"not reviewed","diceOutput":".53","share":"Share with everybody","imageUrl":"","matUrl":"","fileDetail":{"metaData":["Meta 1","Meta 2"],"scanParameter":["Param 1","Param 2"],"analyticsOutput":["Analytics 1","Analytics 2"],"shareStatus":["Status 1","Status 2"]}}]';
  dummyRecommendations:string='[{"actionId":"uniqueId","actionMessage":"Change Resolution","actionsOptions":[{"actionOptionId":"uniqueId","actionName":"a) 1080p","semCommand":{}},{"actionOptionId":"uniqueId","actionName":"a) 720p","semCommand":{}}]}]';
  
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
