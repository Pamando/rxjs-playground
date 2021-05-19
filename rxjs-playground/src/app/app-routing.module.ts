import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ConcatenationComponent} from "./concatenation/concatenation.component";
import {MergingComponent} from "./merging/merging.component";
import {SwitchComponent} from "./switch/switch.component";
import {exhaust} from "rxjs/operators";
import {ExhaustComponent} from "./exhaust/exhaust.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {
    path: "",
    component: OverviewComponent

  },
  {
    path: "concatenation",
    component: ConcatenationComponent
  },
  {
    path: 'merging',
    component: MergingComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'exhaust',
    component: ExhaustComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
