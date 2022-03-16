import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { LabelComponent } from './label/label.component';

@NgModule({
    declarations:[ContainerComponent,HeaderComponent,FooterComponent,MainComponent, LabelComponent],
    exports:[ContainerComponent,HeaderComponent,FooterComponent,MainComponent,LabelComponent]
})
export class UtilityModule{}