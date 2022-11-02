// @flow

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Text, Flex} from 'brainly-style-guide';
import translator from 'WebComponentsUtils/translator';
import {startMobiltekTransaction} from '../../paymentsActions';
import {
  DisclaimersInFormSection,
  DisclaimersInFormSectionItem,
} from '../Disclaimers/DisclaimersInFormSection';
import {PaymentPolicyDisclaimer} from '../Disclaimers/PaymentPolicyDisclaimer';
import {isPaymentsByPayUTermsOfServiceRequired} from 'WebComponentsUtils/config';
import {PaymentsSummaryFacade} from '../PaymentsSummary/PaymentsSummaryFacade';

const informationText = translator.trans('kodiak_sms_payment_information');
const purchaseText = translator.trans('payu_form_purchase_text');

type PropsType = {
  startMobiltekTransaction: () => void,
};

export const SMSFormContainer = ({startMobiltekTransaction}: PropsType) => {
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  const [tosError, setTosError] = useState(false);
  const termsOfServiceAcceptanceRequired =
    isPaymentsByPayUTermsOfServiceRequired();
  const onTogglePrivacyPolicy = () => setAcceptedPrivacyPolicy(open => !open);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (termsOfServiceAcceptanceRequired && !acceptedPrivacyPolicy) {
      setTosError(true);
      return;
    }

    startMobiltekTransaction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentsSummaryFacade />
      {termsOfServiceAcceptanceRequired ? (
        <DisclaimersInFormSection>
          <DisclaimersInFormSectionItem>
            <PaymentPolicyDisclaimer
              name="sms_form_payment_policy"
              value={acceptedPrivacyPolicy}
              onChange={onTogglePrivacyPolicy}
              showError={tosError}
            />
          </DisclaimersInFormSectionItem>
          <DisclaimersInFormSectionItem>
            <Text
              size="xsmall"
              color="text-gray-60"
              weight="bold"
              align="to-center"
            >
              {informationText}
            </Text>
          </DisclaimersInFormSectionItem>
        </DisclaimersInFormSection>
      ) : (
        <Flex marginTop="s" justifyContent="center" alignItems="center">
          <Text
            size="xsmall"
            color="text-gray-60"
            weight="bold"
            align="to-center"
          >
            {informationText}
          </Text>
        </Flex>
      )}
      <Flex marginBottom="m" marginTop="m" justifyContent="center">
        <Button fullWidth variant="solid-indigo">
          {purchaseText}
        </Button>
      </Flex>
    </form>
  );
};

const mapDispatchToProps = {
  startMobiltekTransaction,
};

export default connect<PropsType, {}, _, _, _, _>(
  null,
  mapDispatchToProps
)(SMSFormContainer);
