import React from 'react';

class  Meetings extends React.Component {

    render() {
        const { user } = this.props;

        return (
            <div className="text-left pl-2">
                <h1 className="text-primary">Meetings</h1>
                </div>
        );
    }
}

export default Meetings ;