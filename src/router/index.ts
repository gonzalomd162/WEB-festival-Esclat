
import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../components/paginae/domus/Domus.vue";
import Batman from "../components/paginae/batman/Batman.vue";
import Primus from "../components/paginae/simpsons/primus.vue";
import Responsum from "../components/paginae/responsum/Responsum.vue";

import Layout from "@/components/paginae/simpsons/Layout.vue";
import Circa from "@/components/paginae/simpsons/Circa.vue";

import Collectione from "@/components/paginae/simpsons/Collectione.vue";
import Character from "@/components/paginae/simpsons/Character.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },
          {
            path: "/batman",
            name: "batman",
            component: Batman
        },
          {
            path: "/simpsons",
            children: [
                {
                    path: '',
                    name: 'simpsons',
                    component: Primus

                },
                {
                    path: 'about',
                    component: Layout,
                    children: [
                    {
                        path:'',
                        name: 'simpsons-about',
                        component: Circa
                      }
                    ]
                },
                {
                    path: 'gallery',
                    component: Layout,
                    children:[
                    {
                        path:'',
                        name: 'simpsons-characters',
                        component: Collectione
                    },
                    {
                        path: ':id',
                        name: 'simpsoms-detail',
                        component: Character

                    }
                 ]
                },
                

                

            ]
            
        },
         {
            path: "/indecision",
            name: "indecision",
            component: Responsum
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }


    ]

})