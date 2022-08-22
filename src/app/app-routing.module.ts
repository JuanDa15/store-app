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
    redirectTo: '/v1/products/list',
    // component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // npm i ngx-quicklink --save
    // Consist in load the modules depending of the links that are show in
    // screen
    preloadingStrategy: QuicklinkStrategy,
    // Consist in load the modules depending of the routes that the developer selects
    // througt the data attribute of the route
    // preloadingStrategy: CustomPreloadService
    // Consist in pre-load all modules separated in the lazy load strategy,
    // before the main chunk loads
    // preloadingStrategy: PreloadAllModules,
    // IA Strategy: With google analytics o firebase analytics and guess js
    enableTracing: false,
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
