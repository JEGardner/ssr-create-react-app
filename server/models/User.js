var keystone = require('keystone')
var Types = keystone.Field.Types

var User = new keystone.List('User')

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Text, initial: true, required: true, index: true, label: 'Username' },
	password: { type: Types.Password, initial: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access this CMS', index: true }
})

// Provide access to Keystones
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin
})

User.defaultColumns = 'name, email, isAdmin'
User.register()
