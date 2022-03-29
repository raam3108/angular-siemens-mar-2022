import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';
describe('CounterComponent', () => {
let fixture:ComponentFixture<CounterComponent>;
beforeEach( async ()=>{
await TestBed.configureTestingModule({
//component under test
declarations:[CounterComponent]
}).compileComponents(); //fluent interface pattern
//wrapper around CounterComponent
fixture= TestBed.createComponent(CounterComponent);
//input property is set
fixture.componentInstance.startCount=200;
fixture.componentInstance.ngOnChanges();
fixture.detectChanges();//Trigger Change Detection Cycle
});
it('should create', () => {
const component=fixture.componentInstance;
expect(component).toBeTruthy();
});
it('Button Click increments the count',()=>{
//Arrange Act and Assert
//find increment button
const _elementRef=fixture.debugElement;
const increment_button= _elementRef.query(By.css('[data-testid="increment-button"]'));
increment_button.triggerEventHandler('click',null);
fixture.detectChanges();
const strongElement=_elementRef.query(By.css('[data-testid="count"]'));
expect(strongElement.nativeElement.textContent).toBe('201');
});
it('Button Click Decrements the count',()=>{
//Arrange Act and Assert
//find increment button
const _elementRef=fixture.debugElement;
const decrement_button= _elementRef.query(By.css('[data-testid="decrement-button"]'));
decrement_button.triggerEventHandler('click',null);
fixture.detectChanges();
const strongElement=_elementRef.query(By.css('[data-testid="count"]'));
// expect(strongElement.nativeElement.textContent).toBe('199');
console.log(strongElement.nativeElement.textContent);
expect(strongElement.nativeElement.textContent).toBe('199');
});
it('Reset Count',()=>{
const _elementRef=fixture.debugElement;
const resetInputElement=_elementRef.query(By.css('[data-testid="reset-input"]'));
resetInputElement.nativeElement.value="20";
const reset_button= _elementRef.query(By.css('[data-testid="reset-button"]'));
reset_button.triggerEventHandler('click',null);
fixture.detectChanges();
const strongElement=_elementRef.query(By.css('[data-testid="count"]'));
expect(strongElement.nativeElement.textContent).toBe('20');
});
it('startCount Input propoerty Test',()=>{
const _elementRef=fixture.debugElement;
const strongElement=_elementRef.query(By.css('[data-testid="count"]'));
expect(strongElement.nativeElement.textContent).toBe('200');
})
it("Emit countChange event on increment button click",()=>{
let actualValue:number | undefined;
//Arrange
fixture.componentInstance.countChange.subscribe((value:number)=>{
actualValue=value;
});
//Act
const increment_button= fixture.debugElement.query(By.css('[data-testid="increment-button"]'));
increment_button.triggerEventHandler('click',null);
//Assert
expect(actualValue).toBe(201);
})
it("Emit countChange event on Decrement button click",()=>{
let actualValue:number | undefined;
//Arrange
fixture.componentInstance.countChange.subscribe((value:number)=>{
actualValue=value;
});
//Act
const decfement_button= fixture.debugElement.query(By.css('[data-testid="decrement-button"]'));
decfement_button.triggerEventHandler('click',null);
//Assert
expect(actualValue).toBe(199);
})
it("Emit countChange event on Reset button click",()=>{
let actualValue:number | undefined;
//Arrange
fixture.componentInstance.countChange.subscribe((value:number)=>{
actualValue=value;
});
//Act
const _elementRef=fixture.debugElement;
const resetInputElement=_elementRef.query(By.css('[data-testid="reset-input"]'));
resetInputElement.nativeElement.value="20";
const reset_button= _elementRef.query(By.css('[data-testid="reset-button"]'));
reset_button.triggerEventHandler('click',null);
//Assert
expect(actualValue).toBe(20);
})
});