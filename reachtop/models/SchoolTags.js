var keystone = require('keystone');

/**
 * SchoolTags Model
 * ==================
 */

var SchoolTags = new keystone.List('SchoolTags', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: '学校标签',
});

SchoolTags.add({
	name: { type: String, required: true },
});

SchoolTags.relationship({ ref: 'School', path: 'schools', refPath: 'categories' });

SchoolTags.register();
