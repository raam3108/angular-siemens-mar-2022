import { Subject } from "rxjs";

export class  CommunicationService{

    private subject = new Subject< {
        category: string;
        price: string;
        stocked: boolean;
        name: string;
    }[]>();
    
    publish(data: {
        category: string;
        price: string;
        stocked: boolean;
        name: string;
    }[]){
    
        this.subject.next(data);
    
    }
    
    getObservableRef(){
        return this.subject.asObservable();
      }

}

