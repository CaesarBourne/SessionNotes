export default (config, {strapi}) =>{
    return async (ctx, next) =>{
        const {id} = ctx.params;

        const session = await strapi.entityService.findOne('api::sessionnote.sessionnote', id,{
            fields : ['isPrivate']
        });
        if(!session){
            return ctx.notFound("Session Note not found");
        }

        if(session.isPrivate){
            return ctx.forbidden("You are not allowed to access this session note");
        }
        await next();
    }
}