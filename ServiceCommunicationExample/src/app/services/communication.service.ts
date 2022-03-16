import { Subject } from "rxjs";
import { EmiDataModel } from "../model/EmiDataModel";
export class CommunicationService{
    private subject = new Subject<EmiDataModel>();

    publish(data:EmiDataModel){

        this.subject.next(data);

    }

    getObservableRef(){
        return this.subject.asObservable();
      }
}