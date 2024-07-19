
import {IsString} from "class-validator";

export class PortFolioDto {

    @IsString()
    public id:string;
}
