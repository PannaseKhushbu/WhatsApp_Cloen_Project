import { Component, EventEmitter,Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(event : any)
  {
    let value = event.target.value.trim();
    event.target.value ='';
    if (value.length < 1) return ;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value, 
      time: '12.05', 
      me: true,
    });
  }

}