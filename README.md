# tv-buttons

A collection of button components
## Components
- [Button](#button)
- [Floating Action Button](#floating-action-button)
- [Switch Button](#switch-button)

## Docs
### Button
```javascript
import Button from "tv-buttons/dist/Button";
```

**Field** | **Type** | **Description**
--- | :---: | ---
label | string or node | (required)
onClick | func | (required)
className | string | 
disabled | bool |
value | string |
type | string | _button_, _submit_ or _reset_. default: _button_
events | object | object with one or more [React Syntethic Events](https://reactjs.org/docs/events.html)

### Floating Action Button
```javascript
import FloatingActionButton from "tv-buttons/dist/FloatingActionButton";
```

**Field** | **Type** | **Description**
--- | :---: | ---
icon | string | (required)
onClick | func | (required)
className | string |
fixed | bool | fixes the button in the bottom right corner of screen. default: _false_
events | objects | object with one or more [React Synthetic Events](https://reactjs.org/docs/events.html)

### Switch Button
```javascript
import SwitchButton from "tv-buttons/dist/SwitchButton";
```

**Field** | **Type** | **Description**
--- | :---: | ---
onClick | func | (required)
enabled | boolean | (required)
className | string | 
onLabel | string | label for the ON position (right)
offLabel | string | label for the OFF position (left)

## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).