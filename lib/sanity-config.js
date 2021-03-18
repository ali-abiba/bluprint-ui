const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'hr83v39b',
    dataset: 'production',
    useCdn: false
});

export default client;
