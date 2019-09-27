import React from 'react';
import './lien-he.scss';
import { locale } from '../../config/locale';

class LienHePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div>{ locale.contact }</div>
            </React.Fragment>
        )
    }
}
    export default LienHePage