/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
	user: [
		{
			name: 'John Wayne',
			phone: '63728473829',
			picture: 'https://randomuser.me/api/portraits/men/83.jpg',
			
		},
		{
			name: 'Peter Quinn',
			phone: '4620414532',
			picture: 'https://randomuser.me/api/portraits/men/32.jpg',
			
		},
		{
			name: 'Jane Eyre',
			phone: '4536728653',
			picture: 'https://randomuser.me/api/portraits/women/94.jpg',
			
		}
	]
}
