import { Routes } from '@angular/router';
import { InvalidrouteComponent } from '../invalidroute/invalidroute.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

// import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const HomeLayoutRoutes: Routes = [

    { path: '',      redirectTo:'dashboard' },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',      component: UserprofileComponent },

];
