/*****************************************************
# Company Name          : 
# Author                : 
# Created Date          : 22-04-2019
# Module                : ChatComponent                     
# Object name           : ChatComponent    
# Functionality         : Chat plugin operation
# Purpose               : constructor, ngOnChanges, getChatHistory, scrollChatHistory, closeChatWindow, sendMessage, toggleEmojiContent, appendEmojiText, openTransfarFileBox, submitTransfarFile
*******************************************************/

import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { CommonService } from "../../services/common.service";
import * as emoji from "./emojilist";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnChanges {
  @Input('config') config: any = null;
  chatPerson: any = null;
  sendByPerson: any = null;
  room: any = null;
  roomList: any = [];
  message: any = '';
  emojiList: Array<any> = [];
  activeEmojiGroup: any = null;
  toggleEmoji: any = {};
  submitText: any = '';
  fileUploadErrorStatus: any = {};

  /* Function Name : constructor
	* Author : 
	* Created Date : 22-04-2019 
	* Modified Date : *
	* Purpose : to assign valuable instance and call functions which need data on load
	* PARAMS : 
	*/
  constructor(
    private chatService: ChatService,
    private cService: CommonService
    ) {
    
    this.chatService.getMessage
      .subscribe((msg: any) => {
        let roomIndex = this.roomList.findIndex((item) => {
          return item.room == msg.room
        });
        if (this.roomList[roomIndex]) {
          if (msg.type == 'TEXT') {
            msg.message = decodeURIComponent(msg.message);
          }
          this.roomList[roomIndex].messages.push(msg);
          setTimeout(() => {
            var objDiv = document.getElementById("chatMessageBody-" + msg.room).lastElementChild;
            objDiv.scrollIntoView();
          }, 20);
        }
      })

    this.chatService.invitationAccept.subscribe((acceptData: any) => {
      let roomIndex = this.roomList.findIndex((item) => {
        return item.room == acceptData.room.room
      });
      if (this.roomList[roomIndex]) {
        this.roomList[roomIndex].accept = true;
      }
    })

    this.emojiList = emoji.EMOJILIST;
    this.activeEmojiGroup = this.emojiList[0];
  }
  /* Function Name : ngOnChanges
	* Author : 
	* Created Date : 22-04-2019 
	* Modified Date : *
	* Purpose : to assign valuable on child parameters change value
	* PARAMS : 
	*/
  ngOnChanges() {
    if (this.config) {
      this.submitText = [];
      if (this.config.chatwith) {
        this.chatPerson = this.config.chatwith;
      }
      if (this.config.user) {
        this.sendByPerson = this.config.user;
      }
      if (this.config.room) {
        this.room = this.config.room;
        let roomIndex = this.roomList.findIndex((item) => {
          return item.room == this.room
        });
        if (roomIndex == -1) {
          let newRoomData = {
            room: this.room,
            chatWith: this.chatPerson,
            messages: [],
            accept: this.config.request,
            loader: false,
            page: 1
          };

          this.roomList.push(newRoomData);
          this.getChatHistory(this.room);

          if (!this.config.request) {
            this.chatService.addUserToRoom(this.sendByPerson, this.room);
          }
        }
      }
    }
  }
  /* Function Name : getChatHistory
	* Author : 
	* Created Date : 23-04-2019 
	* Modified Date : *
	* Purpose : to get the history of chat
	* PARAMS : room
	*/
  getChatHistory(room) {
    let roomIndex = this.roomList.findIndex((item) => {
      return item.room == room
    });
    let page = this.roomList[roomIndex].page;

    this.chatService.getChatHistory(room, page)
      .subscribe((chatHistoryData: any) => {
        if (chatHistoryData.statustext == 'success') {

          let chatHistory = chatHistoryData.data.list;
          if (chatHistory.length > 0) {
            chatHistory.reverse();
            let oldMEssages = this.roomList[roomIndex].messages;
            this.roomList[roomIndex].messages = chatHistory.concat(oldMEssages);
            if (this.roomList[roomIndex].page == 1) {
              setTimeout(() => {
                var objDiv = document.getElementById("chatMessageBody-" + room).lastElementChild;
                objDiv.scrollIntoView();
              }, 20);
            }
          }
          this.roomList[roomIndex].loader = false;
          this.roomList[roomIndex].page += 1;
        }
      });
  }
  /* Function Name : scrollChatHistory
	* Author : 
	* Created Date : 23-04-2019 
	* Modified Date : *
	* Purpose : to get the history of chat on scrolling div
	* PARAMS : room
	*/
  scrollChatHistory(room) {
    var objDiv = document.getElementById("chatMessageBody-" + room);
    if (objDiv.scrollTop == 0) {
      this.getChatHistory(room);
    }
  }
  /* Function Name : closeChatWindow
	* Author : 
	* Created Date : 23-04-2019 
	* Modified Date : *
	* Purpose : to close chat window
	* PARAMS : room, roomIndex
	*/
  closeChatWindow(room, roomIndex) {
    this.roomList.splice(roomIndex, 1);
    delete this.fileUploadErrorStatus[room];
    delete this.toggleEmoji[room];
    document.getElementById("messageContent-" + room).innerHTML = '';
  }
  /* Function Name : sendMessage
	* Author : 
	* Created Date : 23-04-2019 
	* Modified Date : *
	* Purpose : to send message
	* PARAMS : room, e
	*/
  sendMessage(room, e) {
    if (e.which == 13) {
      let text = encodeURIComponent(e.target.innerText);
      if (text) {
        this.chatService.sendMessage(room, this.sendByPerson.id, 'TEXT', text);
        e.target.innerText = '';
        this.submitText = [];
        this.toggleEmoji[room] = false;
        this.cService.emitNotification(this.sendByPerson.cpp, 'CHAT');
        this.cService.emitNotification(this.chatPerson.cpp, 'CHAT');
      }
      e.preventDefault();
    }
  }
  /* Function Name : toggleEmojiContent
	* Author : 
	* Created Date : 24-04-2019 
	* Modified Date : *
	* Purpose : to toggle emoji window
	* PARAMS : room
	*/
  toggleEmojiContent(room) {

    if (!this.toggleEmoji[room]) {
      this.toggleEmoji[room] = true;
    } else {
      this.toggleEmoji[room] = false;
      
    }
  }
  /* Function Name : appendEmojiText
	* Author : 
	* Created Date : 24-04-2019 
	* Modified Date : *
	* Purpose : to append emoji with message
	* PARAMS : room, emoji
	*/  
  appendEmojiText(room, emoji) {
    let messageElement = document.getElementById("messageContent-" + room);
    let messageText = messageElement.innerHTML;
    messageElement.innerHTML = messageText + emoji.code;
  }
  /* Function Name : openTransfarFileBox
	* Author : 
	* Created Date : 24-04-2019 
	* Modified Date : *
	* Purpose : to open file transfer window
	* PARAMS : room
	*/ 
  openTransfarFileBox(room) {
    let fileElement = document.getElementById("message-transfar-" + room);
    fileElement.click();
  }
  /* Function Name : submitTransfarFile
	* Author : 
	* Created Date : 24-04-2019 
	* Modified Date : *
	* Purpose : to transfar file                                                                                  
	* PARAMS : room, e
	*/   
  submitTransfarFile(room, e) {
    let file = e.target.files[0];
    if (file) {
      let fileType = file.type;
      if (fileType == "application/pdf" || fileType.indexOf("image/") > -1 || fileType == "text/plain" || fileType.indexOf("audio/") > -1) {
        if (file.size < (2 * (1024 * 1024))) {

          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            let fileObj = {
              name: file.name,
              type: fileType,
              data: reader.result
            };
            this.chatService.sendMessage(room, this.sendByPerson.id, 'MEDIA', fileObj);
            this.cService.emitNotification(this.sendByPerson.cpp, 'CHAT');
            this.cService.emitNotification(this.chatPerson.cpp, 'CHAT');
          };
          this.fileUploadErrorStatus[room] = 0;

        } else {
          this.fileUploadErrorStatus[room] = 2;
        }

      } else {
        this.fileUploadErrorStatus[room] = 1;
      }
      setTimeout(()=>{
        if (this.fileUploadErrorStatus[room]) {
          this.fileUploadErrorStatus[room] = 0;
        }
      },2000)
    }
  }
}
