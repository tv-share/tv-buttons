import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from "../src/index";

const fn = () => { };

it('renders correctely', () => {
	const component = renderer.create(
		<Button label="Exemplo" onClick={() => console.log("Click")} />
	);

	expect(component.toJSON()).toMatchSnapshot();
});
