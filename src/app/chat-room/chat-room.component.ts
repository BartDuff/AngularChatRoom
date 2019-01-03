import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../models/user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  user: User;
  message: Message;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = null;
  }

}
