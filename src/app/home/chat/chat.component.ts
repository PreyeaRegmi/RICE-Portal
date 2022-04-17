import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';
// import { FirebaseAuthService } from '../services/firebase/firebase-auth.service';
// import { Message } from '../model/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;

  chat$: Observable<Chat>;

  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    // public auth: FirebaseAuthService
  ) {}

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id');
    // TODO: first load already existing history
    // TODO: listen on changes
    // const source = this.chatService.getHistory(chatId);
    // this.chat$ = this.chatService.buildChat(source).pipe(
    //   tap(res => this.integrateNewMessages(res)),
    //   tap(() => this.scrollBottom())
    // );

    this.chat$
  }

  private integrateNewMessages(chat) {
    const newMessages = chat.messages.filter(
      (newMessage: Message) =>
        !this.messages.some((message: Message) =>
          this.isSameMessage(message, newMessage)
        )
    );
    newMessages.forEach(msg => this.messages.push(msg));
  }

  private isSameMessage(message: Message, newMessage: Message): boolean {
    return (
      message.content === newMessage.content &&
      message.uid === newMessage.uid &&
      message.createdAt.isSame(newMessage.createdAt)
    );
  }

  trackByCreated(msg) {
    return msg.createdAt;
  }

  private scrollBottom() {
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }
}
