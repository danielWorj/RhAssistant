import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadComponent : ()=>import('./Components/dashboard/dashboard').then((d)=>d.Dashboard),
    },
    {
        path : 'dashboard',
        loadComponent : ()=>import('./Components/dashboard/dashboard').then((d)=>d.Dashboard),
    }, 
    {
        path : 'cvtheque', 
        loadComponent : ()=>import('./Components/cvtheque/cvtheque').then((cv)=>cv.Cvtheque)
    }, 
    {
        path : 'matching', 
        loadComponent : ()=>import('./Components/matching/matching').then((m)=>m.Matching)
    },
    {
        path : 'recommandation', 
        loadComponent : ()=>import('./Components/recommandation/recommandation').then((r)=>r.Recommandation)
    },
    {
        path : 'configuration', 
        loadComponent : ()=>import('./Components/Configuration/configuration/configuration').then((c)=>c.Configuration)
    }
];
