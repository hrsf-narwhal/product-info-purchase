import React from 'react';

export default class AlmostGone extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="bottomCell">
                    <svg viewBox="0 0 48 48" height="48" width="48" aria-hidden="true" focusable="false">
                        <path 
                            fill="#333333" 
                            d="M35,7H13c-0.6,0-1,0.4-1,1v4.7c0,2.4,0.9,4.7,2.6,6.4l4.2,4.2c0.2,0.2,0.3,0.4,0.3,0.7
                            c0,0.2-0.1,0.5-0.3,0.7l-4.2,4.2c-1.7,1.7-2.6,4-2.6,6.4v4.7c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1v-4.7c0-2.4-0.9-4.7-2.6-6.4  
                            l-4.2-4.2c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.2,0.1-0.5,0.3-0.7l4.2-4.2c1.7-1.7,2.6-4,2.6-6.4V8C36,7.4,35.6,7,35,7L35,7z M34,12.7  
                            c0,1.9-0.7,3.6-2,4.9l-4.2,4.2c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.8,0.3,1.6,0.9,2.1l4.2,4.2c1.3,1.3,2,3.1,2,5v3.7H14v-3.7  
                            c0-1.9,0.7-3.6,2-4.9l4.2-4.2c0.6-0.6,0.9-1.3,0.9-2.1c0-0.8-0.3-1.6-0.9-2.1L16,17.7c-1.3-1.3-2-3.1-2-5V9h20V12.7z M13,6h22  
                            c0.5,0,0.9-0.4,1-0.8c0-0.1,0-0.1,0-0.2c0-0.6-0.4-1-1-1H13c-0.6,0-1,0.4-1,1c0,0.1,0,0.1,0,0.2C12.1,5.6,12.5,6,13,6z M35,42H13  
                            c-0.5,0-0.9,0.4-1,0.8c0,0.1,0,0.1,0,0.2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1c0-0.1,0-0.1,0-0.2C35.9,42.4,35.5,42,35,42z">
                        </path>
                        <path 
                            fill="#FFAC5D" 
                            d="M22.3,20.9c0.2,0.2,0.4,0.3,0.7,0.4c0.3,0.1,0.7,0.2,1.1,0.2s0.7-0.1,1.1-0.2c0.2-0.1,0.5-0.2,0.7-0.4  
                            c1.9-1.7,4.3-3.9,5.2-5.4c0.2-0.4,0.1-0.8-0.1-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.2-12.9-0.2-13.3,0c-0.1,0-0.1,0.1-0.2,0.2  
                            c-0.3,0.3-0.3,0.7-0.1,1.1C17.9,17,20.4,19.2,22.3,20.9L22.3,20.9z">
                        </path>
                        <path 
                            fill="#FFAC5D" 
                            d="M20.9,28.9C18,30.1,16,33,16,36.3c0,0.5,0.4,0.9,0.9,0.9h14.2c0.5,0,0.9-0.4,0.9-0.9c0-3.3-2-6.2-4.9-7.4  
                            c-0.9-0.4-2-0.6-3.1-0.6S21.9,28.5,20.9,28.9z">
                        </path>
                    </svg>
                </div>
                <div className="bottomCell">
                    <span>
                        <strong>Almost gone. </strong>
                        There's only {this.props.amount} left.
                    </span>
                </div>
            </div>
        );
    }
}