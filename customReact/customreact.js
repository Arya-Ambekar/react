function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);   

    container.appendChild(domElement)
    */

    // In the above approach the problem will arrise if there are more or less attributes than 2
    // To solve this problem and to make this code more modular we will write loop based code

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
    
}

// this is how react sees the html returned in function after the transpilation:
const reactElement = {
    type: 'a', // this is an anchor tag
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)