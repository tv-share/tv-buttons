import React from 'react';
import renderer from 'react-test-renderer';

import { Switch } from "../src/index";

const fn = () => { };

it('renders correctely on ON position', () => {
	const component = renderer.create(
		<Switch isEnabled={true} onClick={() => console.log("ON")}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctely on OFF position', () => {
	const component = renderer.create(
		<Switch isEnabled={false} onClick={() => console.log("OFF")}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});