var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * School Model
 * ==========
 */

var School = new keystone.List('School', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	label: '学校',
});

School.add({
	name: { type: Types.Text, required: true, index: true, initial: true, label: '校名' },
	title: { type: Types.Text, required: true, index: true, initial: true, label: 'School Name' },
	description: { type: Types.Textarea, label: '描述' },
	content: { type: Types.Html, label: '内容', wysiwyg: true },
	image: { type: Types.CloudinaryImage, label: '照片' },
	categories: { type: Types.Relationship, ref: 'SchoolCategory', many: true, label: '分类' },
	tags: { type: Types.Relationship, ref: 'SchoolTags', many: true, label: '标签' },
});

School.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

School.defaultColumns = 'name, title, categories';
School.register();
