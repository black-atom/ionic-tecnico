import { ReduxModule } from './../redux/redux.module';
import { PagesModule } from './../pages/pages';
import { LoginPage } from '../pages/login/login';
import { Network } from '@ionic-native/network';

import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocketIoProvider } from '../providers/socket-io/socket-io';
import { StoreModule, ActionReducer } from '@ngrx/store';

import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import { EffectsModule } from '@ngrx/effects';
import { compose } from 'redux';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import persistState from 'redux-localstorage'
import { SyncDataProvider } from '../providers/sync-data/sync-data';
import { NetwordStatusProvider } from '../providers/netword-status/netword-status';
import { LoginProvider } from '../providers/login/login';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers = [debug];



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PesquisaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ReduxModule,
    PagesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    PesquisaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketIoProvider,
    Camera,
    SyncDataProvider,
    NetwordStatusProvider,
    Network,
    LoginProvider
  ]
})
export class AppModule {}
