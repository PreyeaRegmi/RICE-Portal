import { jsonObject, jsonMember, jsonArrayMember, jsonMapMember, TypedJSON } from 'typedjson';

@jsonObject
export
    class FileDTO {
    @jsonMember public fileId: string;
    @jsonMember public fileName: string;
    @jsonMember public status: string;
    @jsonMember public diceOutput: string;
    @jsonMember public share: string;
    @jsonMember public imageUrl: string;
    @jsonMember public matUrl: string;
    @jsonMember public fileDetail: FileDetail;

}

@jsonObject
export class FileDetail {
    @jsonArrayMember(String) public metaData: string[];
    @jsonArrayMember(String) public scanParameter: string[];
    @jsonArrayMember(String) public analyticsOutput: string[];
    @jsonArrayMember(String) public shareStatus: string[];
}