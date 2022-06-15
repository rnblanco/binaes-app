import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MessagePayload } from '../models/message-payload';

@Injectable({
    providedIn: 'root'
})
export class GlobalMessageService {

    private payloadSource = new Subject<MessagePayload>();

    itemsHandler = this.payloadSource.asObservable();

    setPayload(payload: MessagePayload) {
        this.payloadSource.next(payload);
    }
}
