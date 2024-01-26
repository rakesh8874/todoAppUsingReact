function customRender(element, container){
    /*
    const myElement = document.createElement(element.type)
    myElement.innerHTML = element.children
    myElement.setAttribute('href', element.props.href)
    myElement.setAttribute('target', element.props.target)
    container.appendChild(myElement)
    */
   const myElement = document.createElement(element.type)
   myElement.innerHTML = element.children
   for(const i in element.props){
     myElement.setAttribute(i, element.props[i])
   }
   container.appendChild(myElement)
}


const myContainer = document.getElementById('root')

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me'
}

customRender(reactElement, myContainer)