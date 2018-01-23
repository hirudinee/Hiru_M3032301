let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.publish({
		Message: 'this is a test message from amazon',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Promotional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: '123456'
			}
		},
		PhoneNumber: '+94715397214'
	}).promise()
		.then(data => {
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		});



	callback(null, 'Successfully executed');
}