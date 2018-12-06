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
			picture: 'https://s3-us-west-2.amazonaws.com/tdspictures/dba2b7574a888ae970f362b40ea37d638cde35b0/original.jpg',
			thumbnail: 'https://s3-us-west-2.amazonaws.com/tdspictures/dba2b7574a888ae970f362b40ea37d638cde35b0/thumb_128x128.jpg',
			
		},
		{
			name: 'Peter Quinn',
			phone: '4620414532',
			picture: 'https://s3-us-west-2.amazonaws.com/tdspictures/e62d0ba741586eb4c861cb1cf7e8c936a8f672f7/original.jpg',
			thumbnail: 'https://s3-us-west-2.amazonaws.com/tdspictures/e62d0ba741586eb4c861cb1cf7e8c936a8f672f7/thumb_128x128.jpg',
			
		},
		{
			name: 'Jane Eyre',
			phone: '4536728653',
			picture: 'https://s3-us-west-2.amazonaws.com/tdspictures/76e03c67b1e5020b486f4d46d4f0d4408711f04f/original.jpg',
			thumbnail: 'https://s3-us-west-2.amazonaws.com/tdspictures/76e03c67b1e5020b486f4d46d4f0d4408711f04f/thumb_128x128.jpg',
			
		}
	]
}
