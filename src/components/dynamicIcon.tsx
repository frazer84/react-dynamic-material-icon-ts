import * as React from 'react';
import * as Icons from '@material-ui/icons/';

type IconType = typeof import('@material-ui/icons/index');

interface DynamicIconProps {
    iconName: string,
    className: string
}

function upperFirst(string:string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
}
  
function fixIconNames(string:string) {
    const name = string.split('-').map(upperFirst).join('')
    if (name === '3dRotation') {
        return 'ThreeDRotation'
    } else if (name === '4k') {
        return 'FourK'
    } else if (name === '360') {
        return 'ThreeSixty'
    }
    return name;
}

export default class DynamicIcon extends React.Component<DynamicIconProps> {
    constructor(props: DynamicIconProps) {
        super(props);
    }

    render() {
        return React.createElement(Icons[fixIconNames(this.props.iconName)! as keyof IconType], {className: this.props.className});
    }
}