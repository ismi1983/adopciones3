import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterDogsComponent } from "./register-dogs.component";

describe("RegisterDogsComponent", () => {
  let component: RegisterDogsComponent;
  let fixture: ComponentFixture<RegisterDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDogsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
