# tv-buttons

A collection of button components
## Components
- [Button](#button)
- [Floating Action Button](#floating-action-button)
- [Switch Button](#switch-button)

## Docs
### Button

**Field** | **Type** | **Description**
--- | :---: | ---
label | string or node | (required)
className | string | 
onClick | func |
disabled | bool |
type | string | _button_, _submit_ or _reset_. default: _button_
value | string |
events | object | object with one or more [React Syntethic Events](https://reactjs.org/docs/events.html)

### Floating Action Button

**Field** | **Type** | **Description**
--- | :---: | ---
icon | string | (required)
onClick | func | (required)
className | string |
fixed | bool | fixes the button in the bottom right corner of screen. default: _false_
events | objects | object with one or more [React Synthetic Events](https://reactjs.org/docs/events.html)

### Switch Button

**Field** | **Type** | **Description**
--- | :---: | ---
onClick | func | (required)
className | string | 
enabled | boolean |
onLabel | string | label for the ON position (right)
offLabel | string | label for the OFF position (left)

## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).