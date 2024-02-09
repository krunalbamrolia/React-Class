import React from 'react';

const Message = ({ category, content, time }) => {
    return (
        <div className="message">
            <p><b>{category}</b> {content}</p>
            <small className="text-muted">{time}</small>
        </div>
    );
};

const Messages = () => {
    return (
        <div>
            <Message 
                category="Academic" 
                content="Summer training internship with Live Projects." 
                time="2 Minutes Ago" 
            />
            <Message 
                category="Co-curricular" 
                content="Global internship opportunity by Student organization." 
                time="10 Minutes Ago" 
            />
            <Message 
                category="Examination" 
                content="Instructions for Mid Term Examination." 
                time="Yesterday" 
            />
        </div>
    );
};

export default Messages;
