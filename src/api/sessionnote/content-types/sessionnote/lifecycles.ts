// import type { Lifecycle  } from '@strapi/strapi'

const lifecycle : any = {
    async beforeCreate(event){
        const {data} = event.params;
        if(data.notes){
            data.summary = buildSummary(data.notes)
        }
 
    },

    async beforeUpdate(event){
        const {data} = event.params;
        if(data.notes){
            data.summary = buildSummary(data.notes);
        }
     }

}

 
function buildSummary(html: string): string {
  // Strip HTML tags from richtext and take first ~120 chars
  const text = html.replace(/<[^>]+>/g, '').trim();
  if (text.length <= 120) return text;
  return text.slice(0, 120) + '…';
}