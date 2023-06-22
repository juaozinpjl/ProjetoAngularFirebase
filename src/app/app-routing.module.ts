import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cadastrar-animal',
    loadChildren: () => import('./cadastrar-animal/cadastrar-animal.module').then( m => m.CadastrarAnimalPageModule)
  },
  {
    path: 'visualizar-animal',
    loadChildren: () => import('./visualizar-animal/visualizar-animal.module').then( m => m.VisualizarAnimalPageModule)
  },
  {
    path: 'consultar-animal',
    loadChildren: () => import('./consultar-animal/consultar-animal.module').then( m => m.ConsultarAnimalPageModule)
  },
  {
    path: 'editar-animal',
    loadChildren: () => import('./editar-animal/editar-animal.module').then( m => m.EditarAnimalPageModule)
  },
  {
    path: 'remover-animal',
    loadChildren: () => import('./remover-animal/remover-animal.module').then( m => m.RemoverAnimalPageModule)
  },
  {
    path: 'gerenciar-animal',
    loadChildren: () => import('./gerenciar-animal/gerenciar-animal.module').then( m => m.GerenciarAnimalPageModule)
  },
  {
    path: 'atualizar-animal',
    loadChildren: () => import('./atualizar-animal/atualizar-animal.module').then( m => m.AtualizarAnimalPageModule)
  },
  {
    path: 'mario',
    loadChildren: () => import('./mario/mario.module').then( m => m.MarioPageModule)
  },
  {
    path: 'peach',
    loadChildren: () => import('./peach/peach.module').then( m => m.PeachPageModule)
  },
  {
    path: 'luigi',
    loadChildren: () => import('./luigi/luigi.module').then( m => m.LuigiPageModule)
  },
  {
    path: 'bowser',
    loadChildren: () => import('./bowser/bowser.module').then( m => m.BowserPageModule)
  },
  {
    path: 'yoshi',
    loadChildren: () => import('./yoshi/yoshi.module').then( m => m.YoshiPageModule)
  },
  {
    path: 'toad',
    loadChildren: () => import('./toad/toad.module').then( m => m.ToadPageModule)
  },
  {
    path: 'wario',
    loadChildren: () => import('./wario/wario.module').then( m => m.WarioPageModule)
  },
  {
    path: 'waluigi',
    loadChildren: () => import('./waluigi/waluigi.module').then( m => m.WaluigiPageModule)
  },
  {
    path: 'daisy',
    loadChildren: () => import('./daisy/daisy.module').then( m => m.DaisyPageModule)
  },
  {
    path: 'rosalina',
    loadChildren: () => import('./rosalina/rosalina.module').then( m => m.RosalinaPageModule)
  },
  {
    path: 'donkey',
    loadChildren: () => import('./donkey/donkey.module').then( m => m.DonkeyPageModule)
  },
  {
    path: 'diddy',
    loadChildren: () => import('./diddy/diddy.module').then( m => m.DiddyPageModule)
  },
  {
    path: 'lakitu',
    loadChildren: () => import('./lakitu/lakitu.module').then( m => m.LakituPageModule)
  },
  {
    path: 'shy',
    loadChildren: () => import('./shy/shy.module').then( m => m.ShyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
