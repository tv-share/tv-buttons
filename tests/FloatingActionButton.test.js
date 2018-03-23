import React from 'react';
import renderer from 'react-test-renderer';
import FloatingActionButton from "../src/FloatingActionButton/FloatingActionButton";

const fn = () => { };
const icon = "test";

it('renders absolute', () => {
	const component = renderer.create(
		<FloatingActionButton onClick={fn} icon={icon}/>
	);

	expect(component.toJSON()).toMatchSnapshot();
});

it('renders fixed', () => {
    const component = renderer.create(
        <FloatingActionButton fixed onClick={fn} icon={icon} />
    );

    expect(component.toJSON()).toMatchSnapshot();
});