import React from 'react';

import './Main.css';

function Main (props) {
    return (
        <html lang='en'>
            <head>
                <meta charset='UTF-8'/>
                <title>Boxes Are Easy!</title>
            </head>
            <body>
                <h1>Headings Are Block Elements</h1>

                <p>Paragraphs are blocks, too. <em>However</em>, &lt;em&gt; and &lt;strong&gt;
                elements are not. They are <strong>inline</strong> elements.</p>
                
                <p>Block elements define the flow of the HTML document, while inline elements
                do not.</p>

                <div className="button">Button</div>
            </body>
        </html>
    );
}

export default Main;