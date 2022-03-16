import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AccountsModule } from "./accounts/accounts.module";
import { RootComponent } from "./root/root.component";
import { ConsoleLoggerService } from "./services/consoleLogger.service";
import { UtilityModule } from "./utility/utility.module";

//@DecoratorFactory({/*Meta Configuration Details*/})
@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule,UtilityModule,AccountsModule],
    exports:[],
    bootstrap:[RootComponent],
    providers:[
        {provide:ConsoleLoggerService,useClass:ConsoleLoggerService}
    ]
})
export class AppModule{

}
