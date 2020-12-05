import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import remove from 'lodash-es/remove';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  @Input() messageTimeToLive: number;
  @Input() messages: Message[];


  public handleMessageDelete(message: Message): void {
    remove(
      this.messages,
      item => item === message
    );
  }

}
