import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

//Pages
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';

import { ProjekteComponent } from './pages/projekte/projekte.component';
import { NeuigkeitenComponent } from './pages/neuigkeiten/neuigkeiten.component'
import { NavigationComponent } from './elements/navigation.component';
import { FooterComponent } from './elements/footer.component';
import { SharedService } from './shared.service';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

import { InstitutsmitgliederComponent } from './pages/institutsmitglieder/institutsmitglieder.component';
import { MitgliederService } from './pages/institutsmitglieder/mitglieder.service';

import { BuchComponent } from './pages/buch/buch.component';
import { BuchService } from './pages/buch/buch.service';

import { SchriftComponent } from './pages/schrift/schrift.component';
import { SchriftService } from './pages/schrift/schrift.service';
import { LandingService } from './pages/landing/landing.service';
import { ProjekteService } from './pages/projekte/projekte.service';
import { NeuigkeitenService } from './pages/neuigkeiten/neuigkeiten.service';
import { HeftComponent } from './pages/heft/heft.component';
import { HeftService } from './pages/heft/heft.service';
import { ArtikelComponent } from './pages/artikel/artikel.component';
import { ArtikelService } from './pages/artikel/artikel.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  RouterModule.forRoot([
    {path:'', component:LandingComponent},
    {path:'login', component:LoginComponent},
    {path:'institutsmitglieder', component:InstitutsmitgliederComponent},
    {path:'projekte', component:ProjekteComponent},
    {path:'neuigkeiten', component:NeuigkeitenComponent},
    {path:'login', component:LoginComponent},
    {path:'datenschutz', component:DatenschutzComponent},
    {path:'impressum', component:ImpressumComponent},
    {path:'buch', component:BuchComponent},
    {path:'schrift', component:SchriftComponent},
    {path:'heft', component:HeftComponent},
    {path:'artikel', component:ArtikelComponent},
  ],{
    useHash: true
  })
  ],
  declarations: [ AppComponent, 
                  LandingComponent,
                  FooterComponent,
                  LoginComponent,
                  InstitutsmitgliederComponent,
                  ProjekteComponent,
                  NeuigkeitenComponent,
                  NavigationComponent,
                  ImpressumComponent,
                  DatenschutzComponent,
                  BuchComponent,
                  SchriftComponent,
                  HeftComponent,
                  ArtikelComponent],
  bootstrap:    [ AppComponent ],
  providers: [SharedService, MitgliederService, BuchService, SchriftService, LandingService, ProjekteService, NeuigkeitenService, HeftService, ArtikelService]
})
export class AppModule { }
