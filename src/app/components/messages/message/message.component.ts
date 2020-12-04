import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  @Output() onDelete: EventEmitter<Message> = new EventEmitter<Message>();


  public ngOnInit(): void {
    setTimeout(
      () => this.onDelete.emit(this.message),
      1000
    );
  }

}
