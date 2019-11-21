import React, {Component} from 'react'

export default class Errorboundary extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
            errorMessage: ''
        }
    }
    //viene scatenato prima che il componente venga renderizzato
    static getDerivedStateFromError(error){
        return{
            hasError: true,
            errorMessage: error
        }
    }
//.. dopo, usato per loggare l'errore
componentDidCatch(error,info){
        console.error(error, info)
        console.log ("ERROREEEEEEEEEE:", this.state.errorMessage )
    }

    render() {
        if(this.state.hasError){
            
   //   return <h1>An error ocurred:{this.state.errorMessage}</h1>;//Questo rompe tutto

      return  <h1>An error ocurred!</h1>;
    }
    return this.props.children;
}
}