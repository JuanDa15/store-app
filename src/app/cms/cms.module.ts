import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from 'primeng/api';
import { QuicklinkModule } from 'ngx-quicklink';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    GridComponent,
    LayoutComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    QuicklinkModule,
    ReactiveFormsModule
  ]
})
export class CmsModule { }
