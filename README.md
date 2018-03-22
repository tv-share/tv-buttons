# tv-menus

A collection of menu components
## Components

## Docs
- Button
_A simple button._

**Field** | **Type** | **Description**
--- | :---: | ---
label | string or node | (required)
className | string | 
onClick | func |
disabled | bool |
type | string | _button_, _submit_ or _reset_. default: _button_
value | string |
events | object | object with one or more [React Syntethic Events](https://reactjs.org/docs/events.html)

- Switch Button
_A simple switch button._

**Field** | **Type** | **Description**
--- | :---: | ---
onClick | func | (required)
className | string | 
enabled | boolean |
onLabel | string | label for the ON position (right)
offLabel | string | label for the OFF position (left)

- Floating Action Button
_A floating action button._

**Field** | **Type** | **Description**
--- | :---: | ---
icon | string | (required)
onClick | func | (required)
className | string |
fixed | bool | fixes the button in the bottom right corner of screen. default: _false_
events | objects | object with one or more [React Synthetic Events](https://reactjs.org/docs/events.html)

## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).