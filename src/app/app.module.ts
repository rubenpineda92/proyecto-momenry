import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagesContainerComponent } from './images-container/images-container.component';
import { ImagegridCustomizerComponent } from './imagegrid-customizer/imagegrid-customizer.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material.module';
import { AlphabetListComponent } from './alphabet-list/alphabet-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LetterButtonComponent } from './letter-button/letter-button.component';
import { DropdownIconComponent } from './dropdown-icon/dropdown-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesContainerComponent,
    ImagegridCustomizerComponent,
    ImagesGridComponent,
    AlphabetListComponent,
    SearchbarComponent,
    ProfileComponent,
    LetterButtonComponent,
    DropdownIconComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
