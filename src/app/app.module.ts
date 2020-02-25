import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { MainService } from './shared/main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {
  MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ArticleService } from './shared/article.service';
import { CategoryService } from './shared/category.service';
import { NewCategoryDialogComponent } from './new-category-dialog/new-category-dialog.component';
import { MaxCharPipe } from './shared/pipes.pipe';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { LoaderInterceptor } from './loader.interceptor';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormCreateComponent,
    ConfirmDialogComponent,
    FormEditComponent,
    NewCategoryDialogComponent,
    MaxCharPipe,
    SignupComponent,
    LoaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatPasswordStrengthModule.forRoot(),
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  providers: [LoaderService,ArticleService, CategoryService, MainService,AuthGuard,    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, NewCategoryDialogComponent]
})
export class AppModule { }
