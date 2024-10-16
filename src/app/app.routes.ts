import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LayoutComponent } from './Pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    
    {
        path:'',component:LayoutComponent,
        children:[
            {
                path:'dashboard',component:DashboardComponent
            }
        ]
    }
    
];
