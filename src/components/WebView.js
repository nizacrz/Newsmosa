// This code is used to render the web view for the article

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebViewComponent extends Component {
    render() { 
        console.log(this.props.route.params.url);
        return (
            <WebView source={{ url: `${this.props.route.params.url}` }} />
        );
    }
}
 
export default WebViewComponent;