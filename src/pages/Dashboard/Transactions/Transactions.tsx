import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import * as React from 'react';

type TransactionsProps = {};

const transactionFilterData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'sent',
    label: 'Sent',
  },
  {
    value: 'received',
    label: 'Received',
  },
];

const Transactions: React.FC<TransactionsProps> = () => {
  return (
    <Card isCompact>
      <Section
        titleText="Transaction"
        titleRightElement={
          <FormSelect value="all" data={transactionFilterData} isGhost isBordered selectSize="small" />
        }
      >
        <div></div>
      </Section>
    </Card>
  );
};

export default Transactions;
