import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
