/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { provide } from '@angular/core';
import { ApiService } from './api.service';

describe('App: EnvironmentTestBug', () => {
  beforeEach(() => {
    addProviders([
      AppComponent,
      provide(ApiService, { useValue: {} }),
    ]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
