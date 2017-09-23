import { LoginEffects } from '../pages/login/redux/login.effects';
import { reducer } from './reducers';
import { AtendimentoEffects } from './effects/atendimentos';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { localStorageSync } from 'ngrx-store-localstorage';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['login','atendimentos', 'imagens'], rehydrate: true})(reducer);
}
const metaReducers: [any] = [localStorageSyncReducer];

@NgModule({
  imports:[
    EffectsModule.forRoot([AtendimentoEffects, LoginEffects]),
    StoreModule.forRoot(reducer,{metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ]
})
export class ReduxModule { }
