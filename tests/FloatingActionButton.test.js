import React from 'react';
import renderer from 'react-test-renderer';
import { FloatingActionButton } from "../src/index";

const fn = () => { };
const icon = "test";

it('renders correctely', () => {
	const component = renderer.create(
		<FloatingActionButton onClick={fn} icon={icon}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});