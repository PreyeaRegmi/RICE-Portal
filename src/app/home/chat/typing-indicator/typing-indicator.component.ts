import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-typing-indicator',
  templateUrl: './typing-indicator.component.html',
  styleUrls: ['./typing-indicator.component.css']
})
export class TypingIndicatorComponent implements OnInit {
  @Input() user: User;
  @Input() typing: string[];

  constructor() {}

  ngOnInit() {}

  showTyping(typing, userId) {
    return typing.some(typerId => typerId !== userId);
  }

  getTypingUsersById(typing, userId) {
    const otherUserIds = typing.filter(typerId => typerId !== userId);
    let names: string;
    return names;
  }
  getUserName(user) {
    if (!user) {
      return null;
    }
    return user.realName ? user.realName : user.displayName;
  }
}
