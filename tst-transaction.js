const request = require('request');

const defaultOptions = {
    method: 'POST',
    json: true,
    jar: true,
    headers: {
//    'Content-type': 'application/json',
        'Accept': 'application/json'
    }
};

const loginRequest = () => {
    const options = Object.assign({}, defaultOptions);
    options.url = 'http://pcltpopdwebvt01.tsrv.lan:8001/service/broker/login.json';
    options.body = {
        'username': 'BPncuser001',
        'password': 'yourself7504'
    };

    return makeRequest(options);
};

const createTransactionRequest = () => {
    const options = Object.assign({}, defaultOptions);
    options.url = 'http://pcltpopdwebvt01.tsrv.lan:8001/service/broker/update-transaction.json?to=1';
    options.body = {
        '_type': 'transactionViewData',
        'id': '00000000-0000-0000-0000-000000000000',
        'recordVersion': '00000000-0000-0000-0000-000000000000',
        'status': '0',
        'brokerReference': 'BROKERREF987',
        'bankAccountReference': 'BACSREF987',
        'paymentReference': 'PAYMENTREF987',
        'isRecourse': false,
        'totalPremium': 10000,
        'fundingDayDelay': 10,
        'policyDueDate': 1462443719630,
        'previouslyPaidTypeId': 2,
        'client': {
            'id': '00000000-0000-0000-0000-000000000000',
            'name': 'Smith Enterprises',
            'companyRegistrationNumber': '01234567',
            'yearEstablished': 1995,
            'companyType': 'LC',
            'businessType': 'CV',
            'contacts': [
                {
                    'id': '00000000-0000-0000-0000-000000000000',
                    'isPrimary': true,
                    'personIdentity': {
                        'id': '00000000-0000-0000-0000-000000000000',
                        'title': 'Ms',
                        'firstName': 'Jane',
                        'surname': 'Smith',
                        'position': 'Founder'
                    },
                    'contactDetails': {
                        'id': '00000000-0000-0000-0000-000000000000',
                        'email': 'jane.smith@thebioagency.com',
                        'phoneNumber': '07890123456'
                    }
                }
            ],
            'addresses': [
                {
                    'id': '00000000-0000-0000-0000-000000000000',
                    'houseNameOrNumber': 'Emirates Stadium',
                    'street': 'Hornsey Road (Street)',
                    'townOrCity': 'London',
                    'county': '',
                    'postcode': 'N7 7AJ',
                    'country': 'GB'
                },
                {
                    'id': '00000000-0000-0000-0000-000000000000',
                    'houseNameOrNumber': 'Emirates Stadium Secondary',
                    'street': 'Hornsey Road (Street)',
                    'townOrCity': 'London',
                    'county': '',
                    'postcode': 'N7 7AJ',
                    'country': 'GB'
                }
            ]
        },
        'policyLines': [
            {
                'id': '00000000-0000-0000-0000-000000000000',
                'effectiveDate': '1462443719626',
                'expiryDate': '1493979719626',
                'premium': 10000,
                'reference': 'Alt Ref',
                'insurer': {
                    'id': '00000000-0000-0000-0000-000000000000',
                    'code': 'A1',
                    'name': 'ABC'
                },
                'riskType': {
                    'id': '00000000-0000-0000-0000-000000000000',
                    'code': 'A1',
                    'name': 'ABC'
                }
            }
        ],
        'financeOptions': [
            {
                '_type': 'financeOption',
                'id': '47a271d1-e47c-42b8-9073-240184576ace',
                'noOfInstalments': 6,
                'firstInstallmentAmount': 1715,
                'installmentAmount': 1715,
                'grossRate': 2.9,
                'grossApr': 6.1,
                'overrideRate': 0,
                'fundingDayDelay': 14,
                'netRate': 2.9,
                'netApr': 5.4,
                'isOverrideApplied': false,
                'isPremiumFinanceOption': true,
                'isSinglePaymentOption': false,
                'selected': false,
                'useAprCalculator': true,
                'grossRateOriginal': 2.9,
                'grossAprOriginal': 5.4,
                'facilityFee': 35,
                'transactionFee': 290,
                'totalAmountPayable': 10325,
                'paymentSchedules': []
            },
            {
                '_type': 'financeOption',
                'id': '9269194d-b775-483a-ba6f-76bf5ceb9488',
                'noOfInstalments': 8,
                'firstInstallmentAmount': 1297.5,
                'installmentAmount': 1297.5,
                'grossRate': 3.8,
                'grossApr': 7.8,
                'overrideRate': 0,
                'fundingDayDelay': 14,
                'netRate': 3.8,
                'netApr': 7.2,
                'isOverrideApplied': false,
                'isPremiumFinanceOption': true,
                'isSinglePaymentOption': false,
                'selected': false,
                'useAprCalculator': true,
                'grossRateOriginal': 3.8,
                'grossAprOriginal': 7.2,
                'facilityFee': 35,
                'transactionFee': 380,
                'totalAmountPayable': 10415,
                'paymentSchedules': []
            },
            {
                '_type': 'financeOption',
                'id': 'c3af9005-2469-4253-b1b3-ecc22660d818',
                'noOfInstalments': 10,
                'firstInstallmentAmount': 1044.5,
                'installmentAmount': 1044.5,
                'grossRate': 4.45,
                'grossApr': 9.1,
                'overrideRate': 0,
                'fundingDayDelay': 14,
                'netRate': 4.45,
                'netApr': 8.4,
                'isOverrideApplied': false,
                'isPremiumFinanceOption': true,
                'isSinglePaymentOption': false,
                'selected': false,
                'useAprCalculator': true,
                'grossRateOriginal': 4.45,
                'grossAprOriginal': 8.4,
                'facilityFee': 35,
                'transactionFee': 445,
                'totalAmountPayable': 10480,
                'paymentSchedules': []
            },
            {
                '_type': 'financeOption',
                'id': 'fe9386a7-9414-443c-af10-989427ad0aad',
                'noOfInstalments': 12,
                'firstInstallmentAmount': 877.08,
                'installmentAmount': 877.08,
                'grossRate': 5.25,
                'grossApr': 10.7,
                'overrideRate': 0,
                'fundingDayDelay': 14,
                'netRate': 5.25,
                'netApr': 10,
                'isOverrideApplied': false,
                'isPremiumFinanceOption': true,
                'isSinglePaymentOption': false,
                'selected': false,
                'useAprCalculator': true,
                'grossRateOriginal': 5.25,
                'grossAprOriginal': 10,
                'facilityFee': 35,
                'transactionFee': 525,
                'totalAmountPayable': 10560,
                'paymentSchedules': []
            }
        ],
        'paymentMethods': [
            {
                'id': '00000000-0000-0000-0000-000000000000',
                'paymentMethodCode': 'CCDC'
            },
            {
                'id': '00000000-0000-0000-0000-000000000000',
                'paymentMethodCode': 'BATR'
            },
            {
                'id': '00000000-0000-0000-0000-000000000000',
                'paymentMethodCode': 'CHTR'
            }
        ]
    };

    return makeRequest(options);
};

const updateTransactionToStatus2Request = (transactionObject, bankTransferReference) => {
    bankTransferReference = bankTransferReference || '1';
    transactionObject.bankTransferReference = transactionObject.bankTransferReference || bankTransferReference;

    const options = Object.assign({}, defaultOptions);
    options.url = 'http://pcltpopdwebvt01.tsrv.lan:8001/service/broker/update-transaction.json?to=2';
    options.body = transactionObject;

    return makeRequest(options);
};


const getFinanceOptionsRequest = () => {
    const options = Object.assign({}, defaultOptions);
    options.url = 'http://pcltpopdwebvt01.tsrv.lan:8001/service/broker/get-finance-options.json';
    options.body = {
        'totalPremium': '10000'
    };

    return makeRequest(options);
};

const generateClientTokenRequest = (id, offset) => {
    const options = Object.assign({}, defaultOptions);
    options.url = 'http://pcltpopdwebvt01.tsrv.lan:8001/service/test/generate-client-token.json';
    options.body = {
        id,
        offset: offset !== undefined ? offset : 7
    };

    return makeRequest(options);
};

const makeRequest = (options) => {
    return new Promise((fulfill, reject) => {
        request(options, (error, response, body) => {
        if (error) {
            reject(error);
            return;
        }

        if (response.statusCode !== 200) {
            reject(`Unsuccessful request, status code was ${response.statusCode}`);
        }

        fulfill({
            parsedBody: body
        });
    }); 
});
};

const formatErrors = (result) =>
result.parsedBody.errors.map(error => error.message).join('\n');

/* eslint-disable no-alert, no-console */
try {
    loginRequest()
        .then(() => {
        console.log('Getting finance options...');
    return getFinanceOptionsRequest();
})
.then((result) => {
        console.log('Creating transaction...');
    return createTransactionRequest();
})
.then((result) => {
        if (result.parsedBody.status === 200) {
        console.log('Updating transaction to status 2...');
        return updateTransactionToStatus2Request(result.parsedBody.results.TransactionView);
    } else {
        throw 'Create transaction request was not successful: ' + formatErrors(result);
    }
})
.then((result) => {
        console.log('Generating token...');
    return generateClientTokenRequest(result.parsedBody.results.TransactionView.id);
})
.then((result) => {
        const urlEncodedToken = result.parsedBody.results['url-encoded token'];

    console.log(`http://dockercloud-d5cb3332.cloudapp.net/customer/#pay-in-full/${urlEncodedToken}`);
    console.log(`http://dockercloud-d5cb3332.cloudapp.net/customer/#details/${urlEncodedToken}/<finance option guid>`);

})
.catch((error) => {
        console.log(error);
});
} catch(e) {
    console.log(e);
    console.error(e);
}
/* eslint-enable no-alert, no-console */
