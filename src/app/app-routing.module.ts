import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { PortsComponent } from './ports/ports.component';
import { PatchingComponent } from './patching/patching.component';
import { SwitchLocalComponent } from './switch-local/switch-local.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'member', 
    component: MemberListComponent,
  },
  {
    path: 'member/:username',
    component: MemberDetailsComponent,
  },

  /*  children: [
      { path: ':id', redirectTo: '/member/', pathMatch: 'full' },
      { path: '', component: MembersComponent }
      { path: 'edit/:memberId', component: MembersListComponent },
      { path: 'show/:memberId', component: MembersShowComponent },
      { path: 'add/', component: MembersAddComponent },
]*/

  { path: 'room', component: RoomListComponent },
  { path: 'ports', component: PortsComponent },
  { path: 'patching', component: PatchingComponent },
  { path: 'switch_local', component: SwitchLocalComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
