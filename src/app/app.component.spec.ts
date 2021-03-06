import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MessagesComponent} from './components/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/heroes/hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import {MessageService} from './service/message.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        MessagesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        MessageService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
