import React from 'react';
import renderer from 'react-test-renderer';

import SwitchButton from '../src/lib/SwitchButton';

const fn = () => { };

it('renders correctely on ON position', () => {
	const component = renderer.create(
		<SwitchButton enabled={true} onClick={fn}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctely on OFF position', () => {
	const component = renderer.create(
		<SwitchButton enabled={false} onClick={fn}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});