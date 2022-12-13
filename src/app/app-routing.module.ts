import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CinemaComponent } from './cinema/cinema.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { TicketComponent } from './ticket/ticket.component';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'hello', component: HelloworldComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
