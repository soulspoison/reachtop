var keystone = require('keystone');

/**
 * SchoolCategory Model
 * ==================
 */

var SchoolCategory = new keystone.List('SchoolCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: '学校分类',
});

SchoolCategory.add({
	name: { type: String, required: true },
});

SchoolCategory.relationship({ ref: 'School', path: 'schools', refPath: 'categories' });

SchoolCategory.register();
