import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {AppComponent} from './app.component';

describe('AppComponent (component test)', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
    });

    fixture = TestBed.createComponent(AppComponent); // Instance... Do not re-configure TestBed after calling createComponent.

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });
  it('should display original name', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.name);
  });

  it('should display a different test name', () => {
    comp.name = 'Maria';
    fixture.detectChanges();
    expect(el.textContent).toContain('Maria');
  });
});
