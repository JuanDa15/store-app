import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CustomPreloadService } from './utils/services/custom-preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('./website/website.module')
            .then(m => m.WebsiteModule),
    data: {
      preload: true
    }
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module')
          .then(m => m.CmsModule)
  },
  {
    path: '**',
    redirectTo: '/v1',
    // component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
