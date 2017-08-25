import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {LandingComponent} from "../landing/landing.component";
import {AboutComponent} from "../about/about.component";
import {CompetencesComponent} from "../competences/competences.component";
import {ContactComponent} from "../contact/contact.component";

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
    path: 'Competences',
    component: CompetencesComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
