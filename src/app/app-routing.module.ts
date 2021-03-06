import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomNewComponent } from './room-new/room-new.component';
import { PortListComponent } from './port-list/port-list.component';
import { PortDetailsComponent } from './port-details/port-details.component';
import { PortEditComponent } from './port-edit/port-edit.component';
import { PortNewComponent } from './port-new/port-new.component';
import { SwitchLocalComponent } from './switch-local/switch-local.component';
import { SwitchListComponent } from './switch-list/switch-list.component';
import { SwitchDetailsComponent } from './switch-details/switch-details.component';
import { SwitchEditComponent } from './switch-edit/switch-edit.component';
import { SwitchNewComponent } from './switch-new/switch-new.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceNewComponent } from './device-new/device-new.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'member', 
    children: [
      { path: 'search', component: MemberListComponent },
      { path: 'add', component: MemberFormComponent },
      { path: 'view/:username', component: MemberDetailsComponent },
      { path: 'edit/:username', component: MemberEditComponent },
    ],
  },
  { 
    path: 'room', 
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: RoomListComponent },
      { path: 'add', component: RoomNewComponent },
      { path: 'view/:roomNumber', component: RoomDetailsComponent },
      { path: 'edit/:roomNumber', component: RoomEditComponent },
    ],
  },
  { 
    path: 'device', 
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: DeviceListComponent },
      { path: 'add', component: DeviceNewComponent },
      { path: 'view/:mac', component: DeviceDetailsComponent },
      { path: 'edit/:mac', component: DeviceEditComponent },
    ],
  },
  { path: 'switch_local', component: SwitchLocalComponent },
  { 
    path: 'switch',
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SwitchListComponent },
      { path: 'view/:switchID', component: SwitchDetailsComponent },
      { path: 'edit/:switchID', component: SwitchEditComponent },
      { path: 'add', component: SwitchNewComponent },
      { path: 'view/:switchID/port/:portID', component: PortDetailsComponent },
      { path: 'edit/:switchID/port/:portID', component: PortEditComponent },
      { path: 'add/:switchID/port', component: PortNewComponent },
    ],
  },
  {
    path: 'port',
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: PortListComponent },
    ],
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
