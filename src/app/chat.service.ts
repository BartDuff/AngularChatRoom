import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() { 
    this.socket = io.connect(this.url);
  }

  public sendMessage(message: Message) {
    this.socket.emit('new_message', message);
  }
}
