import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomControlVideoPlayerComponent } from './components/custom-control-video-player/custom-control-video-player.component';
import { AdvanceControlVideoPlayerComponent } from './components/advance-control-video-player/advance-control-video-player.component';

const routes: Routes = [{
  path: 'custom-control-video-player',
  component: CustomControlVideoPlayerComponent
}, {
  path: 'advance-control-video-player',
  component: AdvanceControlVideoPlayerComponent
}, { 
  path: '**', redirectTo: '/custom-control-video-player' 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
