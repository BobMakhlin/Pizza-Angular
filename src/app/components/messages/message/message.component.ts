import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() timeToLive: number;

  @Output() onDelete: EventEmitter<Message> = new EventEmitter<Message>();


  public ngOnInit(): void {
    timer(this.timeToLive)
      .subscribe(
        () => this.onDelete.emit(this.message)
      );
  }

}
