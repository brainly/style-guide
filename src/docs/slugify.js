import slug from 'slug';

const slugify = name => slug(name, {lower: true});

export default slugify;
