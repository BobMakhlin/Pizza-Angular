import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import maxBy from 'lodash-es/maxby';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages: Message[] = [];


  public addMessage(text: string): void {
    const message: Message = {
      id: this.getIdForNewMessage(),
      text
    };

    this.messages.push(message);
  }


  private getIdForNewMessage(): number {
    const messageWithMaxId: Message = maxBy(
      this.messages,
      message => message.id
    );

    const maxId = messageWithMaxId?.id;

    return maxId ?? 1;
  }

}
