module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-easy-import': {},
		'postcss-nested': {},
		'postcss-dir-pseudo-class': {},
		'postcss-logical': {},
		'postcss-preset-env': { stage: 0 },
		'postcss-retina-bg-img': {
			retinaSuffix: '@2x',
			logMissingImages: false,
		},
		cssnano: {
			discardComments: {
				removeAll: true,
			},
		},
	},
};
