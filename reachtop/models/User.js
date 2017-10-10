var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	label: '用户管理',
});

User.add({
	name: { type: Types.Name, required: true, index: true, label: '用户名' },
	nickname: { type: Types.Text, initial: true, index: true, label: '姓名' },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true, label: '邮箱' },
	password: { type: Types.Password, initial: true, required: true, label: '密码' },
	phoneNumber: { type: Types.Number, index: true, label: '手机号' },
	gender: {
		label: '性别',
		type: Types.Select,
		options: [{ value: 'male', label: '男' }, { value: 'female', label: '女' }],
		default: 'male',
	},
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, phoneNumber, isAdmin';
User.register();
