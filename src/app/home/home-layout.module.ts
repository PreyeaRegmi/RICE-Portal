import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutRoutes } from './home-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar'; 


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HttpClientModule} from '@angular/common/http';
import { ExpimagelistingComponent } from './expimagelisting/expimagelisting.component';
import { ImageviewerComponent } from '../imageviewer/imageviewer.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { ChatComponent } from './chat/chat.component';
import { ChatControlsComponent } from './chat/chat-controls/chat-controls.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { TypingIndicatorComponent } from './chat/typing-indicator/typing-indicator.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    MatGridListModule,
    MatTooltipModule,
    MatCardModule,
    MatToolbarModule
  
  ],
  declarations: [
    // DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,
  
    DashboardComponent,
    UserprofileComponent,
    ExpimagelistingComponent,
    ImageviewerComponent,
    UsermanagementComponent,
    ChatComponent,
    ChatControlsComponent,
    ChatHeaderComponent,
    ChatMessageComponent,
    TypingIndicatorComponent
  ]
})

export class HomeLayoutModule {}
