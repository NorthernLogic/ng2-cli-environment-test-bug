/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { provide } from '@angular/core';
import { TestService } from './test.service';

describe('App: EnvironmentTestBug', () => {
  beforeEach(() => {
    addProviders([
      AppComponent,
      provide(TestService, { useValue: {} }),
    ]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
