import React from 'react';

const MessageParser = ({ children, actions }) => { 
  const parse = (message) => {             //this will analyze the input
    console.log(message);

    if (message.toLowerCase() === 'hai') {
      // Trigger a reply from the chatbot if the message is "Hai"
      actions.addMessageToBotQueue("What should I do?");
    }
    else if (message.toLowerCase() === 'icefoss' || message.toLowerCase() === 'about icefoss'||message=='icefoss'||message=='ICEFOSS') {
      // Trigger a reply from the chatbot if the message is "Hai"
      actions.addMessageToBotQueue("Icefoss is the flagship event of CS department organized by ACM Student Chapter Fisat and FFSC.It is to be held on FEBRUAry 28 and March 1");
    }
    else if(message=='')
    { 

    }
    else
    {
      actions.addMessageToBotQueue("Sorry,I'm not able to monitor this message.For any Queries,Contact 8089261503");
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => { //eth oro childlum iterte cheyth.oro msginum parse function kodukkum
        return React.cloneElement(child, {   // make a copy of orginal msg before giving to parse
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;