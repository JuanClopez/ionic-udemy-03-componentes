import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';


const PAGES = [
  HeaderComponent
]


@NgModule({
  declarations: [PAGES,
    HeaderComponent
  ],
  exports:[
    PAGES,HeaderComponent  
  ],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
