import React,{useState} from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [profileImage, setProfileImage] = useState(''); 
  const [responseMessages, setResponseMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = async () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      try {
        const response = await fetch('https://your-api-endpoint.com/post-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputValue }),
        });
        const data = await response.json();
        setResponseMessages([...responseMessages, data.response]);

      } catch (error) {
        console.error('Error:', error);
      }
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container'> 
    <div className='row'>
    <div className="chatbox d-flex flex-column justify-content-center">
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div key={index} className="chatbox-message user-message">
            {message}
          </div>
        ))}
      </div>
      <div className="chatbox-responses">
        {responseMessages.map((response, index) => (
          <div key={index} className="chatbox-message response-message">
            {response}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <div className='p-2'>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.447 12.65C9.307 12.51 9.117 12.43 8.917 12.43C8.724 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5Z" fill="#21978B"/>
  <path d="M8.86793 9.85097C9.71955 9.85097 10.4099 9.16059 10.4099 8.30897C10.4099 7.45734 9.71955 6.76697 8.86793 6.76697C8.0163 6.76697 7.32593 7.45734 7.32593 8.30897C7.32593 9.16059 8.0163 9.85097 8.86793 9.85097Z" fill="#21978B"/>
</svg>
</button>
</div>
<div className='p-2'>
  <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.9999 10.5V8.80005H14.5999V15.2H16.2999V13.2H18.2999V11.5H16.2999V10.5H18.9999ZM11.6999 8.80005H13.3999V15.2H11.6999V8.80005ZM8.0999 10.4C8.4999 10.4 8.9999 10.6 9.2999 10.9L10.4999 9.90005C9.8999 9.20005 8.9999 8.80005 8.0999 8.80005C6.2999 8.80005 4.8999 10.2 4.8999 12C4.8999 13.8 6.2999 15.2 8.0999 15.2C9.0999 15.2 9.8999 14.8 10.4999 14.1V11.6H7.6999V12.8H8.8999V13.4C8.6999 13.5 8.3999 13.6 8.0999 13.6C7.1999 13.6 6.4999 12.9 6.4999 12C6.4999 11.2 7.1999 10.4 8.0999 10.4Z" fill="#21978B"/>
  <path d="M20.5 2.02002H3.5C2.26 2.02002 1.25 3.02702 1.25 4.26702V19.774C1.25 21.012 2.26 22.02 3.5 22.02H20.5C21.74 22.02 22.75 21.012 22.75 19.774V4.26702C22.75 3.02702 21.74 2.02002 20.5 2.02002ZM21.25 19.774C21.25 20.184 20.914 20.52 20.5 20.52H3.5C3.086 20.52 2.75 20.184 2.75 19.774V4.26702C2.75 3.85502 3.086 3.52002 3.5 3.52002H20.5C20.914 3.52002 21.25 3.85502 21.25 4.26702V19.774Z" fill="#21978B"/>
</svg>
</button>
</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M19.1301 9.35798L1.61406 0.107979C1.32406 -0.0440207 0.97406 0.00597923 0.74106 0.233979C0.51106 0.459979 0.44806 0.810979 0.59106 1.10198L4.95306 10.022L0.59106 18.942C0.44806 19.234 0.51106 19.585 0.74106 19.81C0.88606 19.95 1.07406 20.022 1.26406 20.022C1.38406 20.022 1.50406 19.994 1.61406 19.935L19.1311 10.685C19.3761 10.555 19.5311 10.299 19.5311 10.021C19.5311 9.74298 19.3761 9.48898 19.1311 9.35898L19.1301 9.35798ZM2.94806 2.50998L15.7521 9.27198H6.25506L2.94806 2.51198V2.50998ZM6.25506 10.77H15.7531L2.94806 17.535L6.25506 10.772V10.77Z" fill="#21978B"/>
</svg></button>
      </div>
    </div>
    </div>
    </div>
  );
};