import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();

  console.log('meta-app-location-1', location);

  const getConverstation = async () => {
    try {
      const iparamValue = await window.client.iparams.get();
      const ticket = await window.client.data.get("ticket");
      const ticketID = ticket.ticket.id;
      console.log('check - 1', iparamValue);
      const result = await window.client.request.invokeTemplate("get_conversation", {
        context: { id: ticketID },
      });
      console.log('success - 1', result);
    } catch(error) {
      console.log('error in getConversation', error);
    }
    
  }

  React.useEffect(() => {
    getConverstation();
  }, [])

  return (
    <React.Fragment>
      <div>Home Component</div>
    </React.Fragment>
  )
}

export default Home;
