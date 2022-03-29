import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    fixture.componentInstance.message="Welcome to Testing!";
    fixture.componentInstance.ngOnChanges(); 
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('output text',()=>{

    
    const _elementRef=fixture.debugElement;
    const outputElement=_elementRef.query(By.css('[data-testid="output"]'));
    expect(outputElement.nativeElement.textContent).toBe('Welcome to Testing!');
    })
});
