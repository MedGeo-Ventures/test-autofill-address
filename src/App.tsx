import { AddressAutofill } from '@mapbox/search-js-react';

function App() {
  return (
    <form>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore next-line */}
      <AddressAutofill
        accessToken={import.meta.env.VITE_MAPBOX_TOKEN as string}
        options={{
          language: 'en',
          country: 'US',
        }}
      >
        <>
          <input name='address1' placeholder='Address Line 1' />
          <input
            name='postcode'
            placeholder='Postcode'
            type='text'
            autoComplete='postal-code'
          />
        </>
      </AddressAutofill>
      <input name='city' placeholder='City' autoComplete='address-level2' />
    </form>
  );
}

export default App;
