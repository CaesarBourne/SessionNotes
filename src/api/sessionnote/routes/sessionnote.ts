// /**
//  * sessionnote router
//  */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::sessionnote.sessionnote');

export default {
    routes : [
        {
            method : 'GET',
            path : "/sessions",
            handler : 'sessionnote.find',
            config : {
                policies : []
            }
        },
        {
            method : 'GET',
            handler : 'sessionnote.findOne',
            path : "/sessionnote/:id",
            config : {
                policies : ['global::is-public-session']
            }
        }
    ]
}