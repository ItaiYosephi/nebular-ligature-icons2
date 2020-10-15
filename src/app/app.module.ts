import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbIconLibraries
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { AppRoutingModule } from "./app-routing.module";
import { CustomNbIconLibraries } from "./custom-nb-icon-libraries";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbIconModule
  ],
  // **** comment to Reproduce **** ///
  providers: [{ provide: NbIconLibraries, useExisting: CustomNbIconLibraries }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconLibraries: NbIconLibraries) {
    this.registerMaterialIcons();
  }

  private registerMaterialIcons() {
    this.iconLibraries.registerFontPack("material-icons", {
      packClass: "material-icons",
      ligature: true
    });
    this.iconLibraries.setDefaultPack("material-icons");
  }
}
