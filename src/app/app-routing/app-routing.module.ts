import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {LandingComponent} from "../landing/landing.component";
import {AboutComponent} from "../about/about.component";
import {CompetencesComponent} from "../competences/competences.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'competences',
    component: CompetencesComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
