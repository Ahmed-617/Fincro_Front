
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient ,HttpParams} from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { MicroCreditComponent } from './Credit/micro-credit/micro-credit.component';
import { AddMicroCreditComponent } from './Credit/add-micro-credit/add-micro-credit.component';
import { MaterialFileInputModule  } from 'ngx-material-file-input';
import { MyCreditsComponent } from './Credit/my-credits/my-credits.component';
import { CreditComponent } from './Credit/credit/credit.component';
import { CreditDetailsComponent } from './Credit/credit-details/credit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AccountComponent,
    LoginComponent,
    MicroCreditComponent,
    AddMicroCreditComponent,
    MyCreditsComponent,
    CreditComponent,
    CreditDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
