import { FwButton, FwInput } from '@freshworks/crayons/react';
import { useState } from 'react';


const notifyMap = {
  'success': 'Success Clicked',
  'danger': 'Danger Clicked',
  'warning': 'Warning Clicked',
  'info': 'Info Clicked'
}

const Form = () => {

  const [name, setName] = useState('');

  const onInput = (val) => setName(val);

  const handleClick = async (key) => {
    try {
      await window.client.db.set("name", {
        val: name
      });
      window.client.interface.trigger("showNotify", {
        type: 'success',
        message: 'Added name to data store'
      })
    } catch (err) {
      window.client.interface.trigger("showNotify", {
        type: 'danger',
        message: 'Failed to add to DB'
      })
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
      {name}
      <FwInput
        label="Name"
        iconLeft="add-contact"
        hintText="Do not enter your user ID's"
        placeholder="Enter your official name"
        required
        onFwInput={(ev) => onInput(ev.target.value)}
        clearInput>
      </FwInput>
      <FwButton color='primary' onClick={() => handleClick()}>Submit</FwButton>
    </div>
  )
}

export default Form;
