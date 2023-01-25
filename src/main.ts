import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app/components/app.routes';
import { environment } from './environments/environment';
import { AppComponent } from './app/components/app.component';
import { MessageAdapterService } from './app/adapters/message-adapter.service';
import MessagesDisplayer from './app/domain/messages-displayer';
//Comentario

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {

   providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),

    //DOMAIN
    {provide: 'IDisplayMessages', useClass: MessagesDisplayer},

    //ADAPTERS
    {provide: 'IManageMessages', useClass: MessageAdapterService}
   
  ],
});
