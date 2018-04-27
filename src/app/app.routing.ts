import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
    // children: [
    //
    //   {
    //     path: '',
    //     component: UserListComponent
    //   },
    //   {
    //     path: 'create',
    //     component: UserCreateComponent
    //   },
    //   {
    //     path: ':id',
    //     component: UserSingleComponent
    //   },
    //   {
    //     path: ':id/edit',
    //     component: UserEditComponent
    //   }
    // ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
