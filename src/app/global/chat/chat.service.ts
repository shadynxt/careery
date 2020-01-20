import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as global from '../../globalConfig';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = env.api.host;
  private socket;
  private getMessageSource = new BehaviorSubject<string>("");
  getMessage = this.getMessageSource.asObservable();

  private getInvitationSource = new BehaviorSubject<string>(null);
  getInvitation = this.getInvitationSource.asObservable();

  private invitationAcceptSource = new BehaviorSubject<string>(null);
  invitationAccept = this.invitationAcceptSource.asObservable();

  constructor(private http: HttpClient) {
    this.socket = io(this.url, {transports: ['websocket']});

    this.socket.on('get-message', (message) => {
      this.getMessageSource.next(message);
    });

    this.socket.on('invitation-room', (invitation) => {
      this.getInvitationSource.next(invitation);
    });
    this.socket.on("invitation-accept", (acceptData)=>{
      this.invitationAcceptSource.next(acceptData);
    });
  }

  addUserToRoom(sendBy, room, inviteReply=false) {
    this.socket.emit('joinroom', {room:room, sendBy:sendBy, replay:inviteReply})
  }

  sendMessage(room, senderId , type,  message) {
    this.socket.emit('send-message', {
      room: room,
      senderId : senderId,
      message : message,
      type: type,
      time: new Date().getTime()
    });
  }

  getChatHistory(room, page=1) {
    return this.http.post(global.API_URL + 'chat-history', global.APPEND_REQUEST_DATA({room:room, page:page}));
  }



}
