const toggleTheme = () => {
	const body = document.documentElement;
	const root = document.getElementById('root');
	const bodyStyles = window.getComputedStyle(root);
	let updatedVariables;

	bodyStyles.backgroundColor === 'rgb(29, 31, 41)'
		? (updatedVariables = {
				'--toggle-bg-color': '#FFFFFF',
				'--toggle-text-primary': '#1D1F29',
				'--toggle-text-secondary': '#63687D',
				'--toggle-border-top': '#FFFFFF',
				'--toggle-bg-card': '#F1F3FA',
				'--toggle-card-hover': '#E1E4F0',
				'--toggle-gradient': '#AEB3CB',
		  })
		: (updatedVariables = {
				'--toggle-bg-color': '#1d1f29',
				'--toggle-text-primary': '#ffffff',
				'--toggle-text-secondary': '#8c98c6',
				'--toggle-border-top': '#333a55',
				'--toggle-bg-card': '#252b42',
				'--toggle-card-hover': '#333a55',
				'--toggle-gradient':
					'linear-gradient(270deg, rgba(64, 219, 130, 1) 0%, rgba(56, 143, 231, 1) 100%)',
		  });

	for (const variable in updatedVariables) {
		body.style.setProperty(variable, updatedVariables[variable]);
	}
};
