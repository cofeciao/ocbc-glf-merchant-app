import React from 'react';

// import types
import { IServicesApplied } from './ServicesApplied';

// import components
import ListCheckbox from '@/components/ListCheckBox';

const TransactionCard:React.FC<IServicesApplied.ITransactionCard> = ( props ) => {
  const { keyCheckbox, dataCheckbox, getDataFromListCheckbox  } = props;

  return (
    <ListCheckbox
      label=""
      textError={`errorMessage`}
      dataCardCheckbox={dataCheckbox}
      lg={4}
      md={4}
      sm={6}
      xs={12}
      checkboxKey={keyCheckbox}
      getValue={getDataFromListCheckbox}
    />
  )
}

export default TransactionCard;